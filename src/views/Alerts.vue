<template>
    <div class="alertsPage">
        <h2>National Weather Alerts</h2>

        <div id="statesSelection">
            <label> Select state:<br/>
            <input type="text" v-model="selected" list="state" />
            <datalist id="state" >
                <select onchange="plzWork()">
                    <option v-for="(stateOpt, indx) in states" :value="stateOpt" v-bind:key="indx" 
                    >
                    <!-- v-on:change="fetchAPIData()" -->
                    <!-- v-on:click="fetchAPIData()" -->
                    <!-- v-on:select="fetchAPIData()" -->
                    <!-- v-on:click="setState(stateOpt)" -->
                    <!-- v-bind:placeholder="fetchAPIData()" -->
                    {{ stateOpt }}
                    </option>
                </select>
            </datalist>
            </label>
            <!-- <p>{{stateSelected}}</p> -->
        </div>

        <h3>Showing alerts for {{selected}}</h3>
        <ul class="alertsUl">
            <li class = "alertsLi" v-for="(item, index) in result" v-bind:key="index"
            >{{item}}</li>
        </ul>
    </div>
</template>


<script>

export default {
    name: 'Alerts', //cass added
    data() {
        return {
            responseAvailable: false,
            apiKey: '<YOUR_RAPIDAPI_KEY>',
           // selectedState: "CA", //cass note to self need to have this start out blank
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
                        "WY"],
                    selected: '', //cass added
                    result: ''
        }
    },

// cass added
computed: {
        stateSelected() {
            // console.log(this.selected);
            // return this.states.find( i => i.value == this.selected );
            return this.selected;
        }


        // setState(item) {
        //     console.log(item); //cass debug
        //     this.selectedState = item;
        //     //console.log(this.selectedState); //cass debug
        //     this.fetchAPIData();
        //     return item;
        // }

    },

    

    methods: {

        plzWork() {
            console.log("cool");
        },

        fetchAPIData( ) { 
            console.log("YOU MADE IT");
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
                    if (response.features[i].properties.senderName.includes(this.selected)){ //was selectedState
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
        // setState(item) {
        //     //console.log(item); //cass debug
        //     this.selectedState = item;
        //     console.log(this.selectedState); //cass debug
        //    this.fetchAPIData(); //cass removed
        // }
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

    .alertsPage {
        font-family: Verdana, Calibri Light, Consolas, Papyrus, Avenir, Helvetica, Arial, sans-serif;
    }
    
    .alertsPage h2 {
    color: #cce5ff;
    }
    
    .alertsPage h3 {
        color: #e6f2ff;
    }

    .alertsPage label {
        color: #e6f2ff;
    }

    .alertsUl {
        counter-reset: gradient-counter;
        list-style: none;
        margin-left: 5%; 
        margin-right: 5%; 
        padding-left: 0;
        padding-right: 0;
    }

    .alertsLi {
        border: solid 1px #cce5ff;
        padding: 5px;
        margin: 5px;
        background-color: #e6f2ff;
        position: relative;
        color: #1a89ff;
        font-size: 20px;
        font-weight: 600;
        font-family: Calibri Light, Verdana, Consolas, Papyrus, Avenir, Helvetica, Arial, sans-serif;
    }

</style>
