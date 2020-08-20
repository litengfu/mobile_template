<template>
  <div>
    <div class="view-container">
      <router-view></router-view>
    </div>
    <div class="footer-container">
      <c-tabbar></c-tabbar>
    </div>
  </div>
</template>
<script>
import CTabbar from "@/components/tabbar";
export default {
  components: {
    CTabbar,
  },
};
</script>
<style lang="scss" scoped>
.view-container {
  height: 100%;
  padding-bottom: 100px;
}

.footer-container {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1000;
  box-shadow: 0 0 20px 0 hsla(0, 6%, 58%, 0.6);
  width: 100%;
}
</style>