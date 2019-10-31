<template>
  <div id="app">
    <NavBar />
    <Search />
    <Grid />
    <Divider />
    <Tabbar />
    <Card />
  </div>
</template>

<script>
import NavBar from "./components/Header.vue";
import Search from "./components/Search.vue";
import Grid from "./components/Grid";
import Tabbar from "./components/Tabbar";
import Divider from "./components/Divider";
import Card from "./components/Card";

export default {
  name: "app",
  components: {
    NavBar,
    Search,
    Grid,
    Tabbar,
    Divider,
    Card
  }
};

</script>

<style>
</style>

