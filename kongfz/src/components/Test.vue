<template>
  <div>
    <input v-model="value" />
    <button @click="send">send</button>
    <p v-text="text"></p>
  </div>
</template>
<script>
import ajax from "../ajax";

const url1 = "http://localhost:3000/test";
export default {
  data() {
    return {
      value: "",
      text: ""
    };
  },
  methods: {
    send() {
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
          name: "get",
          age: this.value
        },
        url: url1,
        type: "get"
      });
    }
  }
};
</script>