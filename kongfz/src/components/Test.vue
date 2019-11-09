<template>
  <div>
    <input v-model="value" />
    <button @click="send">send</button>
    {{value}}
  </div>
</template>
<script>
import ajax from "../ajax";

const url = "http://localhost:3000/result";
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

      //   ajax({
      //     data: {
      //       name: "post",
      //       age: this.value
      //     },
      //     url: url1,
      //     type: "post",
      //     success: data => {
      //       this.text = data;
      //     }
      //   });
      ajax({
        data: {
          count: 20,
          key: "李白"
        },
        url: url,
        type: "get",
        success: data => {
          this.value = data;
        }
      });
    }
  }
};
</script>