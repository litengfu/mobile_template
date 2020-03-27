<template>
  <div class="tabbar">
    <router-link class="tabbar-item" to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link class="tabbar-item" to="/category">
      <i class="iconfont icon-category"></i>
      <span>分类页</span>
    </router-link>
    <router-link class="tabbar-item" to="/cart">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link class="tabbar-item" to="/personal">
      <i class="iconfont icon-personal"></i>
      <span>个人中心</span>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: 'CTabbar'
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixins";

  .router-link-active {
    color: #de181b;
  }

  .tabbar {
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #fff;

    &-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction:column;
      .iconfont {
        margin-bottom: 8px;
        font-size: $icon-font-size;
      }
    }
  }
</style>