<template>
<div>
  <div class="block1"></div>
  <Carousel/>
  <div class="block2"></div>
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
</style>
