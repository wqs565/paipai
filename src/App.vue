<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted:function () {

  }
}
</script>

<style>

  #app {
    width:100%;
    height:100%;
    position: relative;
  }
  html,body,img,ul,li,p{
    margin:0;
    padding: 0;
    font-family: PingFangSC-Regular;
    font-size: 14px;
  }
  div,li,p,span{
    color: #353535;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html,body{
    background: rgb(242,242,242);
    width:100%;
    height:100%;
    position: relative;
  }
</style>
