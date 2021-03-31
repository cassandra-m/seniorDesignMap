<template>
    <div class="airQuality">
        <h3 class="text-center">Air Pollution Risk</h3>

      
      <!-- <div class="columns medium-4" > -->
        <h4>Current Air Quality by ZIP</h4>
        <textarea v-model="airDataString" rows="50" cols="50" autofocus>

        </textarea>

        <ul>
          <li v-for="{stations} in parameters" v-bind:key="stations">
            <p>{{ stations }}</p>
          </li>
        </ul>
      <!-- </div> -->
     
    </div>
</template>

<script>

export default {
    name: 'AirQuality',

    data() {
        return {
            airDataString: String,
            airQuality: []
        };
    },

    methods: {
        containsKey(obj, key ) {
            return Object.keys(obj).includes(key);
        }
    },

    computed: {
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
  params: {postalCode: '90250', countryCode: 'US'},
  headers: {'x-api-key': apikey, 'Content-type': 'application/json'}
};
</script>

<style scoped>
.airQuality {
    color: white;
}
</style>