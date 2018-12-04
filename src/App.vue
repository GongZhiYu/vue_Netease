<template>
  <div id="app">
    <!--显示当前路由组件-->
    <router-view/>  <!--路由组件-->
    <!--普通组件-->
    <FooterGuide v-show="$route.meta.FooterGuide"/>    <!--标识底部显示-->
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    name: 'App',
    components: {
      FooterGuide,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
