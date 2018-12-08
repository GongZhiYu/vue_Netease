<template>
    <div>
      <div @click="a" class="b">返回</div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1>404</h1>
    </div>
</template>

<script>
    export default {

      methods:{
        a(){
         this.$router.push('/page')
        }
      }
    }
</script>

<style scoped>
  .b{
   font-size: 55px;
  }
  h1{
    font-size: 400px;
    margin: 0 auto;
  }
</style>
