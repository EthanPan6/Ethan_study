<template>
  <div class="artcle-item">
    <h3>{{title}}</h3>
    <p>{{essay}}</p>
    <span>{{author}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "我可是title",
      essay: "我可是文章",
      author: "我可是作者"
    };
  },
  methods: {}
};
</script>
<style  scoped>
.artcle-item {
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