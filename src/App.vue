<template>
  <div id="app">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <c-tabbar></c-tabbar>
    </div>
  </div>
</template>

<script>

  import CTabbar from '@/components/tabbar';
  export default {
    name: 'App',
    components: {
      CTabbar
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 120px;
  }
</style>