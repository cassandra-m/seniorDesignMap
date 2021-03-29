<!--
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
-->

<template>
<div class="outerMap">
  <h1>{{ msg }}</h1>
  <div id="mapContainer" class="basemap">
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",
  props: {
    msg: String
  },
  data() {
    return {
      accessToken: "pk.eyJ1IjoiY2Fzcy1tIiwiYSI6ImNrbW9qM3F5bDBoZzAycGxoZmE5aXdoMWwifQ.672BmyQ9ouSrBbR5z7iJQg",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/cass-m/ckmtv2tzx4e8817nk7ng9gve4",
      // center: [103.811279, 1.345399],
      center: [970, 40],
      zoom: 4,
      // maxBounds: [
      //   [103.6, 1.1704753],
      //   [104.1, 1.4754753],
      // ],
    });

    const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-right");

const marker = new mapboxgl.Marker()
  marker.setLngLat([38.041,-122.114])
  marker.addTo(map);

//   const geolocate = new mapboxgl.GeolocateControl({
//   positionOptions: {
//     enableHighAccuracy: true
//   },
//   trackUserLocation: true
// })
// ;

// map.addControl(geolocate, "top-right")
  },
};

</script>

<style lang="scss" scoped>
.basemap {
  width: 80%;
  height: 500px;
  background-color: #1C1C1E;
  margin-left: 10%;
}

.outerMap {
  // margin: 0px;
  background-color: #1C1C1E;
  color: #0a84ffff;
  padding: 5px;

  text-shadow: 2px 2px rgb(7, 77, 146);
  font-family: Consolas, Papyrus, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 20px;
}
</style>