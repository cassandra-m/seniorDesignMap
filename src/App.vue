<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BaseMap msg="Project Gaea"/>

    <!-- single line below added for air quality link -->
    <router-view/>

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
  font-family: Verdana, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5856d6ff;
  /* margin-top: 60px; */
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #1C1C1E;
  padding-bottom: 80px;
  padding-top: 10px;
}

/* stuff below added for air quality link */
#nav a {
  font-weight: bold;
  color: #4da3ff;
}

#nav a.router-link-exact-active {
  color: #1a4fff; /*could also try indianred*/
}

</style>
