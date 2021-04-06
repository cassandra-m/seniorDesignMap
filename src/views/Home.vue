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
    <h1>{{ msg }}</h1>
    <h3>everything you need to protect yourself during a natural disaster</h3>
    <div id="nav" class="links">
      <router-link to="/">Home |</router-link>
      <router-link target="_blank" to="/airQualitySearch"> Air Quality |</router-link>
      <router-link target="_blank" to="/alerts"> Alerts </router-link>
      <router-link target="_blank" to="/about">| About</router-link>
    </div>
    <!-- addition for air quality end -->
    <!-- <h1>{{ msg }}</h1>
    <h3>everything you need to protect yourself during a natural disaster</h3> -->
    
    <div class="dropdown">
      <button v-on:click="myFunction()" class="dropbtn">Search</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#masks">Masks</a>
        <a href="#filters">Purifiers</a>
        <a href="#fans">Protection</a>
      </div>
    </div>

<!-- amazon stuff -->
<div class="amazonLeftItem">
<iframe style="width:110px;height:200px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=projectgaea21-20&marketplace=amazon&amp;region=US&placement=B08V59764B&asins=B08V59764B&linkId=a901b50219778f046082de3c78089a19&show_border=true&link_opens_in_new_window=true&price_color=e62525&title_color=133e66&bg_color=faf2f2">
    </iframe>
</div>


<div class="amazonLeftTop">
<iframe style="width:110px;height:200px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=projectgaea21-20&marketplace=amazon&amp;region=US&placement=B000FJQQVI&asins=B000FJQQVI&linkId=98d2b6afd560da1df0937a8e0063f40f&show_border=true&link_opens_in_new_window=true&price_color=e62525&title_color=133e66&bg_color=f5f5f5">
    </iframe>
    </div>


<div class="amazonRightTop">
    <iframe style="width:110px;height:200px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=projectgaea21-20&marketplace=amazon&amp;region=US&placement=B07T9PQ5J7&asins=B07T9PQ5J7&linkId=f9df6a1fe73d067b2b9645ff9d071835&show_border=true&link_opens_in_new_window=true&price_color=e62525&title_color=133e66&bg_color=f5f5f5">
    </iframe>
  </div>

<div class="amazonRightItem">
  <iframe style="width:110px;height:200px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=projectgaea21-20&marketplace=amazon&amp;region=US&placement=B0872XG1BR&asins=B0872XG1BR&linkId=3efefe533405b4cdb609609e58bdf363&show_border=true&link_opens_in_new_window=true&price_color=e62525&title_color=133e66&bg_color=f5f5f5">
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


// showing the location when clicking on map
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['modis-c6-usa-contiguous-and-h-340hdp', 'calitarget-39qsvy', 'walmartca-756tj6'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  //console.log(feature); //cass debug

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    popup.setLngLat(feature.geometry.coordinates)
    if (feature.properties.street_address != undefined) {
      popup.setHTML('<h3>' + "Walmart" + '</h3><p>' + feature.properties.street_address + '</p><p>' +
       feature.properties.city + ", " + feature.properties.state + '</p>')
    } else {
      popup.setHTML('<h3>' + "Target" + '</h3><p>' + feature.properties["Address.AddressLine1"] +
       '</p><p>' + feature.properties["Address.City"] + ", " + feature.properties["Address.Subdivision"] + '</p>')
    }
    // popup.setHTML('<h3>' + feature.properties.street_address + '</h3><p>' + feature.properties.city + '</p>')
    popup.addTo(map);
});

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
  color: #1a89ff;
  font-weight: bold;
  font-family: Verdana;
}

.outerMap {
  // margin: 0px;
  background-color: #1C1C1E;
  // color: #0a84ffff;
  color: #b3d7ff;
  padding: 0px;
  // text-shadow: 2px 2px rgb(7, 77, 146);
  font-family: Calibri Light, Verdana, Consolas, Papyrus, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 20px;
  
}

.outerMap h3 {
  font-style: italic;
  color: #9acaff;
  margin-top: 0px;
  padding: 0px;
  float: top;
  top: 0px;
}

.dropdown {
  float: left;
  font-family: Verdana, Calibri Light, Consolas, Arial, Helvetica, sans-serif;
  // text-shadow: 0px 0px white;
  font-size: 20px;
  text-align: left;
}
.dropbtn {
  background-color: #cde4ff;
  color: #1a89ff;
  padding: 4px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  /* margin-left: 100px; */
  font-family: Verdana, Calibri, Consolas, Papyrus;
  // font-weight: 200px;
  border-radius: 5px;
  margin-left: 45%;
  margin-top: 5%;
}
.dropbtn:hover, .dropbtn:focus {
  background-color: #006fe6;
}
/* .dropdown {
  position: relative;
  display: inline-block;
} */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #3496ff;
  min-width: 100px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(85, 133, 180, 0.7);
  z-index: 1;
  font-size: 15px;
  text-align: left;
  font-family: Verdana, Consolas, Papyrus;
  margin-left: 1.65%;
}
.dropdown-content a {
  color: #e6f2ff;
  padding-left: 5px;
  padding-right: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: left;
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
    padding-top:0%;
    padding-bottom: 1.25%;
    font-family: Calibri;
}

.links router-link:active {
    color: indianred;
}

.amazonLeftTop {
  float: left;
  margin-top: 9%;
  padding-right: 5px;
  position: absolute;
  top: 200px;
  margin-left: 1.25%;
}

.amazonLeftItem {
  float: left;
  margin-top: 25%;
  padding-right: 5px;
  position: absolute;
  top: 170px;
  margin-left: 1.25%;
}

.amazonRightTop {
  float: right;
  margin-top: 0%;
  margin-right: 1.25%;
  padding-left: 5px;
  position: absolute;
  top: 340px;
  right: 0px;

  // float: left;
  // margin-top: 9%;
  // padding-right: 5px;
  // position: absolute;
  // top: 200px;
  // margin-left: 1.25%;
}

.amazonRightItem {
  float: right;
  margin-top: 25%;
  top:170px;
  right: 0px;
  position: absolute;
  margin-right: 1.25%;
  padding-left: 5px;

  // float: left;
  // margin-top: 25%;
  // padding-right: 5px;
  // position: absolute;
  // top: 170px;
  // margin-left: 1.25%;
}

</style>