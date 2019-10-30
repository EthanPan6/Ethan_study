<template>
  <div>
    <keep-alive>
      <component :is="componentNameComputed"></component>
    </keep-alive>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "./components/tabbar.vue";
import Wechat from "./pages/wechat.vue";
import Contact from "./pages/contact.vue";
export default {
  data() {
    return {
      componentName: 0
    };
  },
  components: {
    Tabbar,
    Wechat,
    Contact
  },
  computed: {
    componentNameComputed() {
      return this.componentName === 0 ? "Wechat" : "Contact";
    }
  }
};
</script>