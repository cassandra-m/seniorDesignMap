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
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link target="_blank" to="/airquality">Air Quality</router-link>
    </div> -->
    <!-- addition for air quality end -->
    <h1>{{ msg }}</h1>
    <!-- <div class="dropdown">
      <button v-on:click="myFunction()" class="dropbtn">Search</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#masks">Masks</a>
        <a href="#filters">Filters</a>
        <a href="#fans">Fans</a>
      </div>
    </div>
    <div id="mapContainer" class="basemap">
    </div> -->
    <img src="../assets/penn_logo.png">
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
// .basemap {
//   width: 80%;
//   height: 500px;
//   background-color: #1C1C1E;
//   margin-left: 10%;
// }

.outerMap {
  // margin: 0px;
  background-color: #1C1C1E;
  // color: #0a84ffff;
  color: #b3d7ff;
  padding: 1px;

  text-shadow: 2px 2px rgb(7, 77, 146);
  font-family: Calibri Light, Verdana, Consolas, Papyrus, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 24px;
}


.dropdown {
  float: left;
  font-family: Consolas, Arial, Helvetica, sans-serif;
  text-shadow: 0px 0px white;
  font-size: 20px;
  text-align: left;
}
.dropbtn {
  background-color: rgb(4, 102, 201);
  color: rgb(221, 232, 243);
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
  background-color: rgb(5, 63, 121);
}
/* .dropdown {
  position: relative;
  display: inline-block;
} */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(47, 129, 211);
  min-width: 140px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(95, 146, 197, 0.2);
  z-index: 1;
  font-size: 20px;
  text-align: left;
  font-family: Consolas, Papyrus;
}
.dropdown-content a {
  color: rgb(221, 232, 243);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown a:hover {background-color: rgb(104, 153, 202);}
.show {display: block;}


// air quality stuff
// nav li.router-link-exact-active {
//   background-color: indianred;
// }

// a {
//   text-decoration: none;
// }


.outerMap img {
  padding: 20px;
  position: absolute;
  left: 45%;
  bottom: 0;
  height: 38px; //original 180
  width: 110px; //original 517 => factor of 2.87
}

</style>