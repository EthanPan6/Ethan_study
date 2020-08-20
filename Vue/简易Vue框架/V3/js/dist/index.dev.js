"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function SelfVue(options) {
  var self = this;
  this.data = options.data;
  this.methods = options.methods; // 添加属性代理

  Object.keys(this.data).forEach(function (key) {
    self.proxyKeys(key);
  }); // 注册监听

  observe(this.data); // 解析和初始化模版，并注册订阅者

  new Compile(options.el, this);
  options.mounted.call(this); // 所有事情处理好后执行mounted函数
}

SelfVue.prototype = {
  proxyKeys: function proxyKeys(key) {
    var self = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function getter() {
        return self.data[key];
      },
      set: function setter(newVal) {
        self.data[key] = newVal;
      }
    });
  }
}; //Observer

function Observer(data) {
  this.data = data;
  this.walk(data);
}

Observer.prototype = {
  walk: function walk(data) {
    var self = this;
    Object.keys(data).forEach(function (key) {
      self.defineReactive(data, key, data[key]);
    });
  },
  defineReactive: function defineReactive(data, key, val) {
    var dep = new Dep();
    var childObj = observe(val);
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function getter() {
        // 如果当前有缓存订阅者，就添加一个新订阅者
        if (Dep.target) {
          // 添加一个订阅者
          dep.addSub(Dep.target);
        }

        return val;
      },
      set: function setter(newVal) {
        if (newVal === val) {
          return;
        }

        val = newVal; // 如果数据有变化，通知所有订阅者

        dep.notify();
      }
    });
  }
}; // 消息订阅器

function Dep() {
  this.subs = [];
}

Dep.prototype = {
  addSub: function addSub(sub) {
    this.subs.push(sub);
  },
  notify: function notify() {
    this.subs.forEach(function (sub) {
      // 调用订阅者的 update 方法
      sub.update();
    });
  }
};
Dep.target = null;

function observe(value, vm) {
  if (!value || _typeof(value) !== 'object') {
    return;
  }

  return new Observer(value);
}

; //订阅者

function Watcher(vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get(); // 将自己添加到订阅器的操作
}

Watcher.prototype = {
  update: function update() {
    this.run();
  },
  run: function run() {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;

    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  },
  get: function get() {
    Dep.target = this; // 缓存自己

    var value = this.vm.data[this.exp]; // 强制执行监听器里的get函数

    Dep.target = null; // 释放自己

    return value;
  }
};
/**
 * 解析器
 * 1、解析模版指令，并替换模版数据，初始化视图
 * 2、将模版指令对应的节点绑定对应的更新函数，初始化相应的订阅器
 */

function Compile(el, vm) {
  this.vm = vm;
  this.el = document.querySelector(el);
  this.fragment = null;
  this.init();
}

Compile.prototype = {
  init: function init() {
    if (this.el) {
      this.fragment = this.nodeToFragment(this.el);
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    } else {
      console.log('Dom元素不存在');
    }
  },
  // 将节点转为文档片段
  nodeToFragment: function nodeToFragment(el) {
    var fragment = document.createDocumentFragment();
    var child = el.firstChild;

    while (child) {
      // 将Dom元素移入fragment中
      fragment.appendChild(child);
      child = el.firstChild;
    }

    return fragment;
  },
  // 编译节点
  compileElement: function compileElement(el) {
    var childNodes = el.childNodes;
    var self = this;
    [].slice.call(childNodes).forEach(function (node) {
      var reg = /\{\{(.*)\}\}/;
      var text = node.textContent;

      if (self.isElementNode(node)) {
        self.compile(node);
      } else if (self.isTextNode(node) && reg.test(text)) {
        self.compileText(node, reg.exec(text)[1]);
      } // 如果有子节点，递归编译


      if (node.childNodes && node.childNodes.length) {
        self.compileElement(node);
      }
    });
  },
  // 编译指令
  compile: function compile(node) {
    var nodeAttrs = node.attributes;
    var self = this;
    Array.prototype.forEach.call(nodeAttrs, function (attr) {
      var attrName = attr.name; // 是否是指令属性

      if (self.isDirective(attrName)) {
        var exp = attr.value;
        var dir = attrName.substring(2);

        if (self.isEventDirective(dir)) {
          // 事件指令
          self.compileEvent(node, self.vm, exp, dir);
        } else {
          // v-model 指令
          self.compileModel(node, self.vm, exp, dir);
        }

        node.removeAttribute(attrName);
      }
    });
  },
  // 编译 {{}} 文本模版语法
  compileText: function compileText(node, exp) {
    var self = this;
    var initText = this.vm[exp];
    this.updateText(node, initText);
    new Watcher(this.vm, exp, function (value) {
      self.updateText(node, value);
    });
  },
  // 编译 v-on 事件指令
  compileEvent: function compileEvent(node, vm, exp, dir) {
    var eventType = dir.split(':')[1];
    var cb = vm.methods && vm.methods[exp];

    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false);
    }
  },
  // 编译 v-model 指令
  compileModel: function compileModel(node, vm, exp, dir) {
    var self = this;
    var val = this.vm[exp];
    this.modelUpdater(node, val);
    new Watcher(this.vm, exp, function (value) {
      self.modelUpdater(node, value);
    });
    node.addEventListener('input', function (e) {
      var newValue = e.target.value;

      if (val === newValue) {
        return;
      }

      self.vm[exp] = newValue;
      val = newValue;
    });
  },
  // 更新文本数据
  updateText: function updateText(node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value;
  },
  // 更新 model 数据
  modelUpdater: function modelUpdater(node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value;
  },
  // 判断是否是指令
  isDirective: function isDirective(attr) {
    return attr.indexOf('v-') == 0;
  },
  // 判断是否是事件指令
  isEventDirective: function isEventDirective(dir) {
    return dir.indexOf('on:') === 0;
  },
  // 判断是否是元素节点
  isElementNode: function isElementNode(node) {
    return node.nodeType == 1;
  },
  // 判断是否是文本节点
  isTextNode: function isTextNode(node) {
    return node.nodeType == 3;
  }
};