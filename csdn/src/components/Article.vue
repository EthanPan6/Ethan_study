<template>
  <div class="artcle-item">
    <div class="title">
      <h3>{{title}}</h3>
      <div class="zuozhe">
        <img :src="imgurl" />
        <span>{{author}}</span>
        <i>私信</i>
        <i>关注</i>
      </div>
    </div>
    <div class="main" v-html="essay"></div>
    <div class="others"></div>
  </div>
</template>
<script>
import Jpg from "../assets/author.jpg";
import Vue from "vue";
import { Tag } from "vant";

Vue.use(Tag);
export default {
  data() {
    return {
      title: "vue v-for循环生成router-link，含可用路由",
      author: " ColourfulTiger ",
      imgurl: Jpg,
      essay: `<div"><p>接着上一篇的内容，使用循环来完成router-link的生成，并可以实现界面的路由</p><p>（1）html部分</p><p>实现循环对路由的配置核心：对路径的配置，红色部分。</p><p></p><p>&lt;p v-for="(operate,path,index) in navTo.operate" class="nav" @click="change(index)"&gt;</p><span style="white-space:pre;">	</span>&lt;router-link<span style="color:#ff0000;"> :to="{ path: operate.path </span>}"&gt;<br><span style="white-space:pre;">	</span>&nbsp; &nbsp; {{operate.name}}<br><span style="white-space:pre;">	</span>&lt;/router-link&gt;<br><span style="white-space:pre;">	</span>&lt;i class="el-icon-arrow-right right"&gt;&lt;/i&gt;<br><p>&lt;/p&gt;</p><p>（2）数据部分</p><p>&nbsp; &nbsp; &nbsp;&nbsp;export default {<br>&nbsp; name: 'HelloWorld',<br>&nbsp; data () {<br>&nbsp; &nbsp; return {<br>&nbsp; &nbsp; <span style="white-space:pre;">	</span>navTo:{<br>&nbsp; &nbsp; <span style="white-space:pre;">		</span>"operate":[<br>&nbsp; &nbsp; <span style="white-space:pre;">		</span>&nbsp; &nbsp; &nbsp; {"name":"系统1",<span style="color:#ff0000;">"path":'/header'</span>},<br>&nbsp; &nbsp; <span style="white-space:pre;">		</span>&nbsp; &nbsp; &nbsp; {"name":"系统2","path":'/HelloWorld/engine'},<br>&nbsp; &nbsp; <span style="white-space:pre;">		</span>&nbsp; &nbsp; &nbsp; {"name":"系统3","path":'/HelloWorld/engine'},<br>&nbsp; &nbsp; <span style="white-space:pre;">		</span>&nbsp; &nbsp; &nbsp; {"name":"系统4","path":'/HelloWorld/engine'},<br>&nbsp; &nbsp; <span style="white-space:pre;">		</span> &nbsp; &nbsp; &nbsp;{"name":"系统5","path":'/HelloWorld/engine'},<br>&nbsp; &nbsp; <span style="white-space:pre;">	</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{"name":"系统6","path":'/HelloWorld/engine'},<br>&nbsp; &nbsp; <span style="white-space:pre;">	</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{"name":"系统7","path":'/HelloWorld/engine'},<br>&nbsp; &nbsp; <span style="white-space:pre;">	</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{"name":"系统8","path":'/HelloWorld/engine'},<br>&nbsp; &nbsp; <span style="white-space:pre;">	</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{"name":"系统9","path":'/HelloWorld/engine'},<br>&nbsp; &nbsp; <span style="white-space:pre;">	</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{"name":"系统10","path":'/HelloWorld/engine'}<br>&nbsp; &nbsp; <span style="white-space:pre;">	</span>&nbsp; &nbsp;]<br>&nbsp; &nbsp; <span style="white-space:pre;">	</span>}<br>&nbsp; &nbsp; }<br>&nbsp; }<br></p><p>}</p><p>（3）index.js文件中对应组件的引入，详情见上一篇内容。</p></div>`
    };
  },
  methods: {}
};
</script>
<style  scoped>
.artcle-item .title h3 {
  font-size: 1.6em;
  font-weight: normal;
  margin: 0 0.5em; /* 要加大 */
}
.artcle-item .title .zuozhe {
  height: 4em;
  background-color: #ddd;
  font-size: 0.8em;
}
.artcle-item .title .zuozhe img {
  float: left;
  margin-top: 0.8em;
  margin-left: 0.3em;
  height: 2.4em;
  width: 2.4em;
  border-radius: 50%;
  background-color: #fff;
  vertical-align: middle;
}
.artcle-item .title .zuozhe span {
  vertical-align: middle;
  line-height: 4em;
  margin-left: 0.3em;
}
.artcle-item .title .zuozhe i {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.8em;
  float: right;
  padding: 0.3em;
  margin-right: 0.3em;
  margin-top: 0.8em;
  border-radius: 0.2em;
  font-style: normal;
  border: 0.1em #000 solid;
  background-color: transparent;
}
.artcle-item .main {
  font-size: 1em;
  margin: 0 0.5em; /* 要加大 */
}
</style>