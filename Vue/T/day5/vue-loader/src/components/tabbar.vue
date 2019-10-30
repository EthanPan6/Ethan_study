<template>
  <div class="weui-tabbar">
    <a
      v-for="(t,index) in tabbar"
      :key="index"
      @click="toggle(index)"
      href="javascript:;"
      :class="['weui-tabbar__item', 
        {'weui-bar__item_on': offset===index}
    ]"
    >
      <span style="display: inline-block;position: relative;">
        <img v-bind:src="iconTabbar" alt class="weui-tabbar__icon" />
        <!-- 徽章 -->
        <span
          v-if="t.badge>0"
          class="weui-badge"
          style="position: absolute;top: -2px;right: -13px;"
          v-text="t.badge"
        ></span>
        <!-- 原点 -->
        <span
          v-if="t.dot"
          class="weui-badge weui-badge_dot"
          style="position: absolute;top: 0;right: -6px;"
        ></span>
      </span>
      <p class="weui-tabbar__label" v-text="t.title"></p>
    </a>
  </div>
</template>
<script>
import iconTabbar from "../assets/icon_tabbar.png";
export default {
  data() {
    return {
      iconTabbar,
      tabbar: [
        {
          title: "微信",
          url: "wechat",
          badge: 8,
          dot: false
        },
        {
          title: "通讯录",
          url: "contact",
          badge: 0,
          dot: false
        },
        {
          title: "发现",
          url: "recover",
          badge: 0,
          dot: true
        },
        {
          title: "我",
          url: "mine",
          badge: 0,
          dot: false
        }
      ],
      offset: 0
    };
  },
  methods: {
    toggle(index) {
      this.offset = index;
    }
  }
};
</script>