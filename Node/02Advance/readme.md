# Node进阶教程

## http和url模块

安装`node-snippets`插件:通过简单的node关键字即可快速获取完整语句

res.write()乱码问题解决加上一句`<meta charset="UTF-8">`
```js
res.write('<head><meta charset="UTF-8"></head>')
 res.write('this is a 哪个 message')
```

### url模块

作用:解析url

+ `url.parse()`解析url
+ `url.format(urlObject)`parse的反操作,将对象转化为url
+ `url.resolve(from, to)`

### 热部署工具-supervisor/nodemon
热部署，就是在应用正在运行的时候升级软件，却不需要重新启动应用。为了节省应用开发和发布的时间。

二选一即可
二者都需要全局安装：
```cmd
 npm install -g supervisor 
 npm install -g nodemon 
```
使用
```cmd
