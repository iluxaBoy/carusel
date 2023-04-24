<template>
<div class="main">
  <div class="container">
    <div class="block1"></div>
    <div class="cerved-up"></div>
    <Carousel/>
    <div class="cerved-down"></div>
    <div class="block2"></div>
  </div>
</div>
</template>

<script>
import Carousel from "./components/Carousel.vue";

export default {
  name: 'App',
  components: {
    Carousel
  }
}
</script>

<style>
*, *::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main{
  overflow: hidden;
  min-height: 800px;
}
.container{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
body{
  background-color: #111;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #b1d8ff;
  margin-top: 60px;
}
.block1{
  position: absolute;
  height: 600px;
  width: 350px;
  top: 0;
  left: 0;
  background-image: linear-gradient(0.25turn, rgba(17, 17, 17, 0.4) , rgba(250,250,250,0) 100%);
  z-index: 2;
}
.block2{
  position: absolute;
  height: 600px;
  width: 350px;
  top: 0;
  right: 0;
  background-image: linear-gradient(-0.25turn, rgba(17, 17, 17, 0.4), rgba(250,250,250,0) 100%);
}
@media (max-width: 950px) {
  .block1{
    width: 150px;
  }
  .block2{
    width: 150px;
  }
}
@media (max-width: 700px) {
  .block1{
    display: none;
  }
  .block2{
    display: none;
  }
}
@media (max-width: 420px) {
  #app{
    font-size: 14px;
  }
}
.cerved-up{
  position: absolute;
  height: 100px;
  width: 2000px;
  margin: auto;
  top: 120px;
  background-color: #111;
  border-radius: 100%;
  z-index: 5;
}
.cerved-down{
  position: absolute;
  height: 100px;
  width: 2000px;
  margin: auto;
  bottom: 200px;
  background-color: #111;
  border-radius: 100%;
  z-index: 5;
}
@media (max-width: 900px) {
    .cerved-up{
        display: none;
    }
    .cerved-down{
        display: none;
    }
}
</style>
