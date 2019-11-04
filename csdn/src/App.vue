<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view />
    </keep-alive>-->
    <Edit />
  </div>
</template>

<script>
import Edit from "./pages/Edit";
export default {
  name: "app",
  components: {
    Edit
  }
};
</script>

<style>
</style>
