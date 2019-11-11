<template>
  <div>
    <van-nav-bar
      left-text
      :right-text=" bRL"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="outBorder">
      <van-cell-group v-if="!RL">
        <van-field v-model="tel" clearable placeholder="请输入手机号" />
        <van-field v-model="password" type="password" placeholder="密码" left-icon="closed-eye" />
        <van-field v-model="sms" center clearable placeholder="6位数字验证码" maxlength="6">
          <van-button
            slot="button"
            size="small"
            type="primary"
            @click="sendCheckCode"
            :text="checkTip"
            :disabled="ccDisabled"
          />
        </van-field>
      </van-cell-group>
      <van-cell-group v-else>
        <van-field v-model="tel" clearable placeholder="手机号" left-icon="contact" />
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
import { NavBar, Toast, CellGroup, Field, Notify } from "vant";
// import axios from "axios";
import ajax from "../ajax";
import { mapMutations } from "vuex";
const urlL = "http://localhost:3000/login";
const urlR = "http://localhost:3000/register";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.use(NavBar)
  .use(Toast)
  .use(CellGroup)
  .use(Field)
  .use(Notify);
export default {
  data() {
    return {
      tel: "",
      password: "",
      sms: "",
      checkTip: "发送验证码",
      ccDisabled: false,
      RL: "true",
      rdcode: undefined
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    onClickLeft() {
      Toast("返回");
      this.$router.push("/main/mine");
    },
    onClickRight() {
      this.RL = !this.RL;
    },
    sendCheckCode() {
      this.checkTip = "验证码已发送";
      this.ccDisabled = true;
      this.rdcode = this.RDCode();
      window.console.log(this.rdcode);
    },
    RDCode() {
      let iStr = "0123456789";
      let chkCode = "";
      for (let i = 0; i < 6; i++) {
        chkCode += iStr.charAt(Math.floor(Math.random() * 10));
      }
      return chkCode;
    },
    login() {
      let _this = this;
      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.tel)) {
        if (this.password.trim()) {
          if (this.RL) {
            //登录
            // let udata = {
            //   tel: this.tel,
            //   password: this.password
            // };
            // axios
            //   .post(urlL, JSON.stringify(udata), {
            //     headers: {
            //       "content-type": "application/x-www-form-urlencoded"
            //     }
            //   })
            //   .then(data => {
            //     if (data) {
            //       //登录成功
            //       // 存入cookie或者localStorage;
            //       this.$router.push("./main/mine");
            //     } else {
            //       Notify({ type: "danger", message: "密码错误" });
            //     }
            //   });
            ajax({
              data: {
                tel: this.tel,
                password: this.password
              },
              url: urlL,
              type: "post",
              success: str => {
                if (str) {
                  //登录成功
                  // 存入cookie或者localStorage;
                  this.$router.push("./main/mine");
                  let msg = JSON.parse(str);
                  window.console.log(str);
                  _this.changeLogin({ token: msg.token });
                  localStorage.setItem("username", msg.username);
                } else {
                  Notify({ type: "danger", message: "密码或者错误" });
                }
              }
            });
          } else {
            //注册
            if (this.sms === this.rdcode) {
              ajax({
                data: {
                  tel: this.tel,
                  password: this.password
                },
                url: urlR,
                type: "post",
                success: str => {
                  if (str) {
                    this.$router.push("./main/mine");
                    let msg = JSON.parse(str);
                    _this.changeLogin({
                      token: msg.token
                    });
                    localStorage.setItem("username", msg.username);
                  } else {
                    Notify({ type: "danger", message: "注册失败，请刷新重试" });
                  }
                }
              });
            } else {
              Notify({ type: "danger", message: "请输入正确的验证码" });
            }
          }
        } else {
          Notify({ type: "danger", message: "请输入密码" });
        }
      } else {
        Notify({ type: "danger", message: "请输入正确的手机号码" });
      }

      //发送axios
      // axios.post(url)
      // axios
      //   .get(url, {
      //     params: {
      //       count: this.count,
      //       key: keyword
      //     }
      //   })
      //   .then(data => {
      //     // window.console.log(data);
      //     this.itemList = data.data; //书单：obj.itemList
      //   });

      this.$cookies.set("token", "dfsdfsdf", 60 * 60 * 24 * 7);
    }
  },
  computed: {
    bRL() {
      return this.RL ? "注册" : "登录";
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