<template>
  <div
    :class="['weui-search-bar',
        { 'weui-search-bar_focusing': isFocusStatus }
    ]"
    id="searchBar"
  >
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          v-model="searchText"
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        />
        <a v-on:click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label @click="focus" class="weui-search-bar__label" id="searchText">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a @click="cancel" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索框是否聚焦
      isFocusStatus: true,
      // 搜索框的值
      searchText: ""
    };
  },
  methods: {
    focus() {
      console.log(this);
      this.isFocusStatus = true;
    },
    cancel() {
      this.isFocusStatus = false;
    },
    // 清空搜索框
    clear() {
      this.searchText = "";
    }
  }
};
</script>