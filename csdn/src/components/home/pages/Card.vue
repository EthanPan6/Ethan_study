<template>
  <div>
    <a href="javascript:void(0);" @click="routeTo()">
      <h3>aera</h3>
      <p>adsasd</p>
      <span>asdasd</span>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    routeTo: function() {
      window.console.log(666);
      // let link = "/article/" + item;
      // this.$router.push(link);
    }
  }
};
</script>
<style  scoped>
a {
  color: #000;
  text-decoration: none;
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