<template>
  <div>
    <van-nav-bar
      left-text
      right-text="免密登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div style="height:12em" class="logo">
      <img :src="Logo" alt />
    </div>
    <div class="outBorder">
      <van-cell-group v-if="way">
        <van-field v-model="username" clearable placeholder="请输入手机号" />
        <van-field v-model="sms" center clearable placeholder="6位数字验证码" maxlength="6">
          <van-button
            slot="button"
            size="small"
            type="primary"
            @click="sendCheckCode"
            :text="checkTip"
            :disabled="disabled"
          ></van-button>
        </van-field>
      </van-cell-group>
      <van-cell-group v-else>
        <van-field v-model="username" clearable placeholder="用户名/邮箱/手机号" left-icon="contact" />
        <van-field v-model="password" type="password" placeholder="密码" left-icon="closed-eye" />
      </van-cell-group>
    </div>
    <div class="loginBtn">
      <van-button type="danger" size="large" @click="login">登录</van-button>
    </div>
    <div class="agree">
      登录/注册即代表同意
      <u>《用户服务条款》</u>与
      <u>《隐私协议》</u>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Toast, CellGroup, Field } from "vant";
import Logo from "../assets/csdn-logo_.png";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.use(NavBar)
  .use(Toast)
  .use(CellGroup)
  .use(Field);
export default {
  data() {
    return {
      way: false,
      username: "",
      password: "",
      sms: "",
      checkTip: "发送验证码",
      disabled: false,
      Logo
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
      this.$router.push("/main/mine");
    },
    onClickRight() {
      this.way = !this.way;
    },
    sendCheckCode() {
      this.checkTip = "验证码已发送";
      this.disabled = true;
      window.console.log("验证码");
    },
    login() {
      //发送axios
      // axios.post(url)
      this.$cookies.set("token", "dfsdfsdf", 60 * 60 * 24 * 7);
    }
  }
};
</script>
<style >
.logo {
  height: 12em;
  position: relative;
}
.logo img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.outBorder {
  border: 0.1em solid #f56;
  margin: 1em;
  border-radius: 0.2em;
}
.loginBtn {
  margin: 0 1em;
}
.agree {
  position: absolute;
  bottom: 2em;
  left: 2em;
  text-align: center;
  color: #aaa;
  font-size: 0.8em;
}
</style>