<template>
  <div class="clothing">
      <div class="header">
        <div class="top"></div>
      </div>

    </div>
</template>

<script>


  export default {
    components:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .clothing{
    height 1500px
  }
  .header{
    width:100%
    height 100px
    position fixed
  }
  .top{
    width: 750px
    height 100px
    background url("images/1.png")
  }



</style>
