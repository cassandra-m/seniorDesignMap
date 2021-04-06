<!--
<template>
    <div id="app">
    </div>
</template>

<script>
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    background: orange;
}
</style>
-->

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
    <!-- addition for air quality begin -->
    <div id="nav" class="links">
      <router-link to="/">Home |</router-link>
      <router-link target="_blank" to="/airQualitySearch"> Air Quality |</router-link>
      <router-link target="_blank" to="/alerts"> Alerts </router-link>
      <router-link target="_blank" to="/about">| About</router-link>
    </div>
    <!-- addition for air quality end -->
    <h1>{{ msg }}</h1>
    
    <div class="dropdown">
      <button v-on:click="myFunction()" class="dropbtn">Search</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#masks">Masks</a>
        <a href="#filters">Filters</a>
        <a href="#fans">Fans</a>
      </div>
    </div>

<!-- amazon stuff -->
<div class="amazonLeftItem">
<iframe style="width:110px;height:200px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=projectgaea21-20&marketplace=amazon&amp;region=US&placement=B08V59764B&asins=B08V59764B&linkId=a901b50219778f046082de3c78089a19&show_border=true&link_opens_in_new_window=true&price_color=e62525&title_color=133e66&bg_color=faf2f2">
    </iframe>
</div>
<div class="amazonRightItem">
    <iframe style="width:110px;height:200px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=projectgaea21-20&marketplace=amazon&amp;region=US&placement=B07T9PQ5J7&asins=B07T9PQ5J7&linkId=f9df6a1fe73d067b2b9645ff9d071835&show_border=true&link_opens_in_new_window=true&price_color=e62525&title_color=133e66&bg_color=f5f5f5">
    </iframe>
  </div>

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
  methods: {
      myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
  },
  data() {
    return {
      accessToken: "pk.eyJ1IjoiY2Fzcy1tIiwiYSI6ImNrbW9qM3F5bDBoZzAycGxoZmE5aXdoMWwifQ.672BmyQ9ouSrBbR5z7iJQg",
      // accessToken: "pk.eyJ1IjoiY2Fzcy1tIiwiYSI6ImNrbW9qM3F5bDBoZzAycGxoZmE5aXdoMWwifQ.672BmyQ9ouSrBbR5z7iJQg",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/cass-m/ckmtv2tzx4e8817nk7ng9gve4",
      // style: "mapbox://styles/cass-m/ckn4w6mrc022u18ph6pxa5aed",
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

// const marker = new mapboxgl.Marker()
//   marker.setLngLat([40,-90])
//   marker.addTo(map);

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

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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
  // color: #0a84ffff;
  color: #b3d7ff;
  padding: 0px;

  text-shadow: 2px 2px rgb(7, 77, 146);
  font-family: Calibri Light, Verdana, Consolas, Papyrus, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 20px;
  
}

.amazonLeftItem {
  float: left;
  margin-top: 10%;
  padding-right: 5px;
  position: absolute;
  top: 170px;
  margin-left: 1%;
}
.amazonRightItem {
  float: right;
  margin-top: 10%;
  // padding-right: 80px;
  // position: absolute;
  bottom:20px;
  margin-right: 1%;
}


.dropdown {
  float: left;
  font-family: Consolas, Arial, Helvetica, sans-serif;
  text-shadow: 0px 0px white;
  font-size: 20px;
  text-align: left;
}
.dropbtn {
  background-color: #b3d7ff;
  color: #4da3ff;
  padding: 4px;
  font-size: 23px;
  border: none;
  cursor: pointer;
  /* margin-left: 100px; */
  font-family: Consolas, Papyrus;
  font-weight: bold;
  border-radius: 5px;
  margin-left: 15%;
}
.dropbtn:hover, .dropbtn:focus {
  background-color: rgb(6, 75, 145);
}
/* .dropdown {
  position: relative;
  display: inline-block;
} */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #4da3ff;
  min-width: 140px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(95, 146, 197, 0.2);
  z-index: 1;
  font-size: 20px;
  text-align: left;
  font-family: Consolas, Papyrus;
}
.dropdown-content a {
  color: #e6f2ff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown a:hover {background-color: #80bdff;}
.show {display: block;}

// air quality stuff
nav li.router-link-exact-active {
  background-color: indianred;
}

a {
  text-decoration: none;
}

.links {
    margin-left: 77%;
}

.links router-link:active {
    color: indianred;
}


</style>