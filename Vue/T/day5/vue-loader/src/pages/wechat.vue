<template>
  <div>
    <Header color="green">微信</Header>
    <Search />
    <Panel />
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Search from "../components/search.vue";
import Panel from "../components/panel.vue";
export default {
  methods: {},
  components: {
    Header,
    Search,
    Panel
  }
};
</script>