<template>
  <div>
    <div id="demo">
      <label for="in">输入:</label>
      <!-- <input id="in" type="text" :value="msg" /> -->
      <input id="in" type="text" @input="change" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
