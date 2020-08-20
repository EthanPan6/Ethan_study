<template>
  <div>
    <div class="head">
      <i class="micon back" @click="goback"></i>
      <i class="micon cart" @click="tocart"></i>
      <i class="micon more" @click="more"></i>
      <div class="menu" v-show="isMenu">
        <span class="arrow"></span>
        <van-cell title="消息" icon="chat-o" />
        <van-cell title="首页" icon="home-o" to="/main/home" />
        <van-cell title="搜索" icon="search" to="/search" />
      </div>
    </div>
    <van-swipe @change="onChange">
      <van-swipe-item v-if="info.normalImg">
        <img :src="info.normalImg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/g1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/g2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/g3.jpg" alt />
      </van-swipe-item>
      <!-- <div class="custom-indicator" slot="indicator">{{ current + 1 }}/3</div> -->
    </van-swipe>
    <div class="info">
      <h2 v-text="info.itemName">克莱因壶</h2>
      <div class="author">
        <i>作者</i>
        <i v-text="info.author">[日]冈岛二人 著</i>
      </div>
      <p class="desc" v-text="info.desc">正版新书，注意封面，版次等差别！！</p>
      <p class="price">
        <span class="price-now">
          <i class="price-now-icon">￥</i>
          <i class="price-now-txt" v-text="info.price">34.08</i>
        </span>
        <!-- <span class="adr-send">北京房山</span> -->
      </p>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="联系" />
      <van-goods-action-icon icon="like-o" text="收藏" />
      <van-goods-action-button color="rgb(212,140,104)" @click="joinCart" text="加入购物车" />
      <van-goods-action-button color="rgb(158,16,14)" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Swipe,
  SwipeItem,
  Cell,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Notify
} from "vant";
// import axios from "axios";
import ajax from "../ajax";
const url = "http://localhost:3000/inCart";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Cell)
  .use(Notify);
export default {
  data() {
    return {
      current: 0,
      isMenu: false,
      info: {
        normalImg: "",
        itemName: "",
        author: "",
        desc: "",
        price: 9999
      }
    };
  },

  created() {
    // // let id = this.$route.query.id;
    let params = JSON.parse(this.$route.query.params);
    window.console.log(params);

    this.info.normalImg = params.normalImg;
    this.info.itemName = params.itemName;
    this.info.author = params.author;
    this.info.desc = params.desc;
    this.info.price = params.price;
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    goback() {
      window.history.go(-1);
    },
    tocart() {
      this.$router.push("/cart");
    },
    more() {
      this.isMenu = !this.isMenu;
    },
    joinCart() {
 
      let token = this.$store.state.token;
      window.console.log(token);
      ajax({
        data: {
          token,
          info: this.info
        },
        url,
        type: "post",
        success: data => {
          let message = data === "ok" ? "加入购物车成功" : "加入失败";
          Notify({ type: "danger", message });
        }
      });
    }
  }
};
</script>
<style>
.head {
  position: relative;
  /* height: 2.5em; */
  z-index: 88;
  background-color: #f0f0f0;
}
.head .micon {
  display: block;
  width: 2em;
  height: 2em;
  position: absolute;
  top: 0.3em;
}
.head .back {
  background: url(../assets/back.png) center center no-repeat;
  background-size: 100%;
  left: 0.3em;
}
.head .cart {
  background: url(../assets/cart.png) center center no-repeat;
  background-size: 100%;
  right: 2.5em;
}
.head .more {
  background: url(../assets/more.png) center center no-repeat;
  background-size: 100%;
  right: 0.3em;
}
.head .menu {
  z-index: 99;
  width: 8em;
  position: absolute;
  top: 2.5em;
  right: 0;
}
.head .menu .arrow {
  position: absolute;
  top: -0.5em;
  right: 1em;
  width: 0;
  height: 0;
  border: 0.3em solid transparent;
  border-bottom-color: #fff;
}
.van-swipe .van-swipe-item img {
  width: 24em;
  height: 18em;
}
.info {
  margin: 0 1em;
}
.info h2 {
  font-size: 1em;
}
.info i {
  font-style: normal;
}
.info .author {
  font-size: 0.9em;
}
.info .author i:nth-child(1) {
  margin-right: 1.5em;
}
.info .author i:nth-child(2) {
  font-weight: 700;
}
.info .desc {
  color: #856d49;
  font-size: 0.8em;
}
.info .price {
  /* display: flex;
  justify-content: space-between; */
}
.info .price .price-now {
  color: #9e100e;
}
.info .price .price-now i:nth-child(1) {
  font-size: 0.8em;
}
.info .price .price-now i:nth-child(2) {
  font-size: 1.2em;
}
.adr-send {
  /* font-size: 0.9em; */
}
</style>