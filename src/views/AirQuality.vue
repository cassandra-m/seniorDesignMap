<template>
    <div class="airQuality">
        <h2 class="text-center">Air Pollution Risk</h2>
      
      <!-- <div class="columns medium-4" > -->
        <!-- <h3>Current Air Quality by ZIP</h3> -->
         <h3>Current Air Quality for ZIP Code "{{zipcodeComputed}}"</h3>
         <!-- cass did above -->
        
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
    props: ['zip'], //cass did

    data() {
        return {
            airDataString: String,
            airQuality: [],
            zipcode: this.$route.params.id //cass did
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