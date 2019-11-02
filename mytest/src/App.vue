<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- <router-link to="/home">Go to Foo</router-link>
    <router-link to="/hello">Go to Bar</router-link>-->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
