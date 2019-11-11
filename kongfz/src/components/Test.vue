<template>
  <div>
    <input v-model="value" />
    <button @click="send">send</button>
    {{value}}
  </div>
</template>
<script>
import ajax from "../ajax";

const url = "http://localhost:3000/login";
export default {
  data() {
    return {
      value: ""
    };
  },

  methods: {
    send() {
      window.console.log(1111);

      // Vue.http.get("/someUrl", [options]).then(successCallback, errorCallback);

      ajax({
        data: {
          tel: 13687688556,
          password: 1234
          // username: "Tom"
        },
        url: url,
        type: "post",
        success: data => {
          this.value = data;
        }
      });
      // ajax({
      //   data: {
      //     count: 20,
      //     key: "李白"
      //   },
      //   url: url,
      //   type: "get",
      //   success: data => {
      //     this.value = data;
      //   }
      // });
    }
  }
};
</script>