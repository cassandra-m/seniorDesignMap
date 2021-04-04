<template>
    <div class="airZipSearch">
        <h2 class="text-center">Air Pollution Risk</h2>
        <form>
            <div class="form">
                <input class="textbox" v-model="msg" type="text" placeholder="Enter ZIP code here">
                <router-link class="submitbutton" :to="{path: '/airQuality', query: {zip:this.msg}}" 
                tag="button" type="submit">submit</router-link>
            </div>
        </form>    
    </div>
</template>

<script>

export default {
    name: 'AirQualitySearch',
    data () {
        return {
            msg: ''
        }
    }
}

</script>


<style scoped>
.airZipSearch {
    color: #cce5ff;
}
</style>