<template>
    <div class="airQuality">
        <h2 class="text-center">Air Pollution Risk</h2>
      
      <!-- <div class="columns medium-4" > -->
        <!-- <h3>Current Air Quality by ZIP</h3> -->
         <h3>Current Air Quality for ZIP Code "{{zipcodeComputed}}"</h3>
         <!-- cass did above -->
        
        <!-- <textarea v-model="airDataString" rows="50" cols="50" autofocus>

        </textarea>

        <ul>
          <li v-for="{stations} in parameters" v-bind:key="stations">
            <p>{{ stations }}</p>
          </li>
        </ul> -->

<h4 style="margin-left: 10px; padding-left: 10px;">Current Air Quality for {{airQuality.stations[0].placeName}} {{airQuality.stations[0].postalCode}}, {{airQuality.stations[0].state}}</h4>
      <p style="margin-left: 10px; padding-left: 10px;">Last updated at {{airQuality.stations[0].updatedAt}}</p>

      
      <div class="columns medium-6" >       
        <!---- <textarea v-model="airDataString" rows="50" cols="50" autofocus></textarea> -->
        <ul>
          <li v-for="(item, index) in airQuality.stations" v-bind:key="index">
            <h4>Pollution Measurements</h4>
            <p>CO: {{item.CO}}</p>
            <p>NO2: {{item.NO2}}</p>
            <p>OZONE: {{item.OZONE}}</p>
            <p>PM10: {{item.PM10}}</p>
            <p>PM25: {{item.PM25}}</p>
            <p>SO2: {{item.SO2}}</p>
            <h4>Air Quality</h4>
            <p>Air Quality Index: {{item.AQI}}</p>
            <p>AQI Pollutant: {{item.aqiInfo.pollutant}}</p>
            <p>AQI Pollutant Concentration: {{item.aqiInfo.concentration}}</p>
            <p>AQI Category: {{item.aqiInfo.category}}</p>
          </li>
        </ul>
      </div>

      <div class="columns medium-6" >
        <h4>Fire Hazard</h4>
        <!-- <textarea v-model="fireDataString" rows="50" cols="50" autofocus></textarea> -->


        <ul>
          <li v-for="(item, index) in fireHazard.data" v-bind:key="index">
            <p>Latitude: {{item.lat}}</p>
            <p>Longitude: {{item.lng}}</p>
            <p>Confidence: {{item.confidence}}</p>
            <p>FRP: {{item.frp}}</p>
            <p>Detection time: {{item.detection_time}}</p>
            <p>Distance: {{item.distance}}</p>
          </li>
        </ul>
        
      </div>



      <!-- </div> -->
     
    </div>
</template>

<script>

export default {
    name: 'AirQuality',
    props: ['zip'], //cass did

    data() {
        return {
            airDataString: String,
            airQuality: [],
            zipcode: this.$route.params.id, //cass did
            fireDataString: String,
            fireHazard: []
        };
    },

    methods: {
        containsKey(obj, key ) {
            return Object.keys(obj).includes(key);
        }
    },

    computed: {
        zipcodeComputed() { //cass did
            return this.$route.query.zip;
        },
        parameters(){
            return Object.values(this.airQuality).map(({
                stations
                
            }) => ({
                stations
            }))
        }
    },

    mounted() {
        this.$axios.request(optionsair).then(response => {
            this.airDataString = JSON.stringify(response.data, null, "\t");
            this.airQuality = response.data;
            // console.log(this.listDataString);
            return response; 
        }),

        this.$axios.request(optionsfire).then(response => {
            this.fireDataString = JSON.stringify(response.data, null, "\t");
            this.fireHazard = response.data;
            console.log(this.listDataString);
            return response; 
            // this.results = response.data;
            // console.log("something");
        })
    }
};

const apikey = 'N4rk05Lsxs6pG7FfzqYl18newiD5aJZB6zReT8Pn';
//const url =  'https://api.ambeedata.com/latest/by-country-code?countryCode=IN'

	
var optionsair = {
  method: 'GET',
  url: 'https://api.ambeedata.com/latest/by-postal-code',
  params: {postalCode: '90250', countryCode: 'US'}, //postal code 90250
  headers: {'x-api-key': apikey, 'Content-type': 'application/json'}
};

var optionsfire = {
    method: 'GET',
    url: 'https://api.ambeedata.com/latest/fire',
    params: {lat: '34.0522', lng: '118.2437'}, // LA Lat and Long for testing
    headers: {'x-api-key': apikey, 'Content-type': 'application/json'}
  };
</script>

<style scoped>
.airQuality {
    color: #cce5ff;
    font-family: Verdana;
}
.airQuality h3 {
    font-family: Verdana;
    color: #e6f2ff;
}
</style>