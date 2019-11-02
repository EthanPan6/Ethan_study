<template>
  <div>
    <Article v-for="(i,s) in Articles" :key="s" />
  </div>
</template>
<script>
import Article from "./Article";
export default {
  data() {
    return {
      Articles: [
        {
          title: "我可是title",
          essay: "我可是文章",
          author: "我可是作者"
        },
        {
          title: "我可是title",
          essay: "我可是文章",
          author: "我可是作者"
        },
        {
          title: "我可是title",
          essay: "我可是文章",
          author: "我可是作者"
        },
        {
          title: "我可是title",
          essay: "我可是文章",
          author: "我可是作者"
        },
        {
          title: "我可是title",
          essay: "我可是文章",
          author: "我可是作者"
        }
      ]
    };
  },
  components: {
    Article
  }
};
</script>