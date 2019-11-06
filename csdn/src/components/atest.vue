<template>
  <div>
    {{news}}
    <button @click="getdata">getdata</button>
  </div>
</template>
<script>
const url = "https://www.csdn.net/api/articles?type=more&category=home";
// const headers = {
//   server: "Tengine",
//   date: "Wed, 06 Nov 2019 09:28:34 GMT",
//   "content-type": "text/html; charset=utf-8",
//   "transfer-encoding": "chunked",
//   connection: "close",
//   "set-cookie": [
//     "acw_tc=2760828d15730325143824871e79a71a4742caf8495ba8db0463056d99d41d;path=/;HttpOnly;Max-Age=2678401"
//   ],
//   "content-encoding": "gzip",
//   "cache-control": "no-cache, no-store",
//   pragma: "no-cache",
//   "strict-transport-security": "max-age=86400"
// };
import axios from "axios";
export default {
  data() {
    return {
      news: {}
    };
  },
  methods: {
    getdata() {
      axios.get(url).then(({ data }) => {
        this.news = data;
        window.console.log(this.news);
      });
    }
  }
};
</script>