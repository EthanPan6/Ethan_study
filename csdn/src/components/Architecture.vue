<template>
  <div>
    <div class="article-item" v-for="(i,s) in Articles" :key="s" :data-src="i.asrc">
      <router-link :to="/article/i.id">
        <!-- to="/article/i.id"去掉:可以跳转,但是... -->
        <h3>{{i.title}}</h3>
        <p>{{i.essay}}</p>
        <span>{{i.author}}</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Articles: [
      //   {
      //     title: "我可是title1",
      //     essay: "我可是文章",
      //     author: "我可是作者",
      //     asrc: "http://www.baidu.com"
      //   },
      //   {
      //     title: "我可是title",
      //     essay: "我可是文章2",
      //     author: "我可是作者"
      //   },
      //   {
      //     title: "我可是title",
      //     essay: "我可是文章",
      //     author: "我可是作者3"
      //   },
      //   {
      //     title: "我可是title4",
      //     essay: "我可是文章",
      //     author: "我可是作者"
      //   },
      //   {
      //     title: "我可是title",
      //     essay: "我可是文章5",
      //     author: "我可是作者"
      //   }
      // ]
    };
  },
  components: {}
};
</script>
<style  scoped>
.article-item {
  margin: 0 0.5em;
}

h3 {
  font-size: 1.2em;
}

p {
  font-size: 1em;
}

span {
  font-size: 0.8em;
}
</style>