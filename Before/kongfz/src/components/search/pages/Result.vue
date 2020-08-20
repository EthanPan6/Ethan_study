<template>
  <div>
    <!-- <button @click="send">send</button> -->
    <!-- {{result}} -->
    <ul>
      <li
        class="list_box"
        v-for="(i,item) in itemList"
        :key="item"
        @click="toGoods({
          normalImg:i.normalImg,
          itemName:i.itemName,
          author:i.author,
          desc:i.importantDesc,
          price:i.price
          })"
      >
        <div class="list_box_left">
          <img :src="i.normalImg" />
        </div>
        <div class="list_box_right">
          <div class="list_box_right_top">
            <div class="title desc" v-text="i.itemName"></div>
            <div class="titles" v-text="i.importantDesc"></div>
            <div class="booklibInfo" v-text="i.author"></div>
          </div>
          <div class="list_box_right_bottom">
            <div class="list_box_bottom">
              <div class="price">
                <span>￥</span>
                <span v-text="i.price"></span>
              </div>
              <div class="price_phase" v-text="i.quality">九品</div>
              <div class="price_phase price_phase2">快递9.00</div>
            </div>
            <div class="list_box_other">
              <div class="book">
                <span v-text="i.shopName">北京书香苑图书 &gt;</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="toTop" @click="toTop"></div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import axios from "axios";
const url = "http://localhost:3000/result";
Vue.use(NavBar);
export default {
  data() {
    return {
      result: "",
      itemList: "",
      count: 10,
      REQUIRE: true,
      loading: false
    };
  },
  created() {
    let keyword = this.$route.query.keyword;
    this.count = 10;
    axios
      .get(url, {
        params: {
          count: this.count,
          key: keyword
        }
      })
      .then(data => {
        // window.console.log(data);
        this.itemList = data.data; //书单：obj.itemList
      });
  },
  mounted() {
    window.addEventListener("scroll", this.scrollBottom);
  },
  methods: {
    scrollBottom() {
      let keyword = this.$route.query.keyword;
      if (
        window.screen.height + document.documentElement.scrollTop >
          document.body.clientHeight - 1 &&
        this.REQUIRE
      ) {
        this.REQUIRE = false;
        this.loading = true;
        this.count += 10;
        axios
          .get(url, {
            params: {
              key: keyword,
              count: this.count
            }
          })
          .then(data => {
            this.itemList = data.data;
            this.$nextTick(() => {
              this.REQUIRE = true;
              this.loading = false;
            });
          })
          .catch(() => {
            this.REQUIRE = true;
          });
      }
    },
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      window.console.log("top");
    },
    toGoods(a) {
      this.$router.push("/goods?params=" + JSON.stringify(a));
    }
  },
  computed: {}
};
</script>
<style>
.count {
  font-size: 0.8em;
  margin-left: 1em;
}
.list_box {
  display: flex;
  min-height: 8em;
  border-bottom: 0.1em solid #eaeaea;
  margin: 0 1em;
}
.list_box .list_box_left {
  flex: 2;
  height: 9.5em;
  overflow: hidden;
  margin-top: 1em;
  display: flex;
  justify-content: center;
}
.list_box .list_box_left img {
  width: 6.5em;
  height: 9em;
}
.list_box .list_box_right {
  flex: 3;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list_box .list_box_right .list_box_right_top {
  display: flex;
  flex-direction: column;
}
.list_box .list_box_right .list_box_right_top .desc {
  display: block;
  height: 2em !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list_box .list_box_right .list_box_right_top .title {
  font-size: 0.9em;
  color: #262626;
  line-height: 1.5em;
  max-height: 4em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.list_box .list_box_right .list_box_right_top .titles {
  max-width: 15em;
  font-size: 0.8em;
  color: #856d49;
  line-height: 1.5em;
  height: 2em;
  margin-top: 0.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list_box .list_box_right .list_box_right_top .booklibInfo {
  height: 1.5em;
  line-height: 1.5em;
  font-size: 0.9em;
  color: #666666;
  margin-top: 0.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list_box .list_box_right .list_box_right_bottom {
  display: flex;
  flex-direction: column;
}
.list_box .list_box_right .list_box_right_bottom .list_box_bottom {
  display: flex;

  min-height: 2.3em;
  flex-wrap: wrap;
}
.list_box .list_box_right .list_box_right_bottom .list_box_bottom .price {
  height: 1.5em;
  float: left;
  display: inline-block;
  color: #9e100e;
  line-height: 1.5em;
  margin-top: 0.5em;
  font-size: 1em;
}
.list_box
  .list_box_right
  .list_box_right_bottom
  .list_box_bottom
  .price
  span:nth-child(1) {
  font-size: 0.7em;
}
.list_box .list_box_right .list_box_right_bottom .list_box_bottom .price_phase {
  float: left;
  display: inline-block;
  white-space: nowrap;
  height: 1.5em;
  font-size: 0.7em;
  /* line-height: 1.5em; */
  padding: 0 0.5em;
  background: #fafafa;
  border-radius: 0.3em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-top: 1.2em;
  color: #999999;
}

.list_box .list_box_right .list_box_right_bottom .list_box_other {
  display: flex;

  align-items: center;
  margin-top: 0.15em;
}
.list_box .list_box_right .list_box_right_bottom .list_box_other .book {
  font-size: 0.7em;
  color: #999999;
  /* height: 0.33em; */
  white-space: nowrap;
}
.toTop {
  position: fixed;
  right: 2em;
  bottom: 5em;
  width: 3em;
  height: 3em;
  z-index: 99;
  background: url(../../../assets/toTop.png) center center no-repeat;
  background-size: 100%;
}
</style>