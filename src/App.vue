<template>
  <div id="app">
    <bin-header />
    <router-view/>
  </div>
</template>
<script>
  import BinHeader from './components/bin-header';
  export default {
    name: 'App',
    components: {BinHeader},
  }
</script>
<style lang="less">
  @import "./assets/styles/index";
  @import "./assets/styles/bin-scroll";
</style>
