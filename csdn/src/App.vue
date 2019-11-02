<template>
  <div id="app">
    <div>
      <router-view  />
      <p>{{ $route.name }}</p>
    </div>dasdas
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar.vue";

export default {
  name: "app",
  components: {
    Tabbar
  }
};
</script>

<style>
</style>
