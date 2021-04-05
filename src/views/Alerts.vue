<template>
    <div class="alertsPage">
        <h2>National Weather Alerts</h2>
        <ul class="statesUl">
            <li class="statesLi" v-for="(item, index) in states" v-bind:key="index" 
            v-on:click="setState(item)">{{item}}</li>
        </ul>
        <h3>Showing alerts for: {{selectedState}}</h3>
        <ul class="alertsUl">
            <li class = "alertsLi" v-for="(item, index) in result" v-bind:key="index">{{item}}</li>
        </ul>
    </div>
</template>


<script>

export default {
    name: 'Alerts',
    data() {
        return {
            responseAvailable: false,
            apiKey: '<YOUR_RAPIDAPI_KEY>',
            selectedState: 'CA',
            states : [ "AK",
                        "AL",
                        "AR",
                        "AS",
                        "AZ",
                        "CA",
                        "CO",
                        "CT",
                        "DC",
                        "DE",
                        "FL",
                        "GA",
                        "GU",
                        "HI",
                        "IA",
                        "ID",
                        "IL",
                        "IN",
                        "KS",
                        "KY",
                        "LA",
                        "MA",
                        "MD",
                        "ME",
                        "MI",
                        "MN",
                        "MO",
                        "MS",
                        "MT",
                        "NC",
                        "ND",
                        "NE",
                        "NH",
                        "NJ",
                        "NM",
                        "NV",
                        "NY",
                        "OH",
                        "OK",
                        "OR",
                        "PA",
                        "PR",
                        "RI",
                        "SC",
                        "SD",
                        "TN",
                        "TX",
                        "UT",
                        "VA",
                        "VI",
                        "VT",
                        "WA",
                        "WI",
                        "WV",
                        "WY"]
        }
    },
    methods: {
        fetchAPIData( ) { 
            this.responseAvailable = false;
            fetch("https://api.weather.gov/alerts?status=actual&message_type=alert&region_type=land&severity=severe", {
                "method": "GET",
                "headers": {
                }
            })
            .then(response => { 
                if(response.ok){
                    return response.json()    
                } else{
                    alert("Server returned " + response.status + " : " + response.statusText);
                }                 
            })
            .then(response => {
                //console.log("Response alert");
                var result = [];
                var c = 0;
                for (var i = 0; i < response.features.length; i++) {
                    if (response.features[i].properties.senderName.includes(this.selectedState)){
                        result[c]= JSON.stringify(response.features[i].properties.headline);
                        c++;
                    }
                }
                if (result.length == 0) {
                    result[0] = "No alerts to show at the moment";
                }
                this.result = result;
                //console.log(this.result.length);
                //this.result = response.features; 
                this.responseAvailable = true;
            })
            .catch(err => {
                console.log(err);
            });
        },
        setState(item) {
            this.selectedState = item;
            this.fetchAPIData();
        }
    },
    beforeMount(){
        this.fetchAPIData()
    },
  };

</script>

<!-- Deniz's code
    <script src="https://unpkg.com/vue"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
-->

<style scoped>
    
    .alertsPage h2 {
    color: #cce5ff;
    }
    
    .alertsPage h3 {
        color: #e6f2ff;
    }

    .statesLi {
        display: inline;
        /* margin: 1.75rem 0;
        padding-left: 1rem;  */
        padding-right: 10px;
    }

    .statesUl {
        display: inline;
        border: solid 1px white;
        padding: 1px;
        margin: 1px;
        background-color: #e5ebd4;
    }

    .alertsUl {
        counter-reset: gradient-counter;
        list-style: none;
        margin-left: 0; 
        padding-left: 0;
    }

    .alertsLi {
        border: solid 1px white;
        padding: 5px;
        margin: 5px;
        background-color: #ddc6b7;
        position: relative;
    }

</style>
