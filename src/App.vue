<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BaseMap msg="HIIIII"/>
  </div>
</template>

<script>
import BaseMap from './components/BaseMap.vue'

export default {
  name: 'App',
  components: {
    BaseMap
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
  /* margin-top: 60px; */
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: black;
}
</style>
