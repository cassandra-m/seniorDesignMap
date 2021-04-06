<template>

<!-- <div class="about"> <h2 style="font-family:verdana;">About</h2>
 <p style="font-family:verdana;">Gaea is here to help mitigate the drastic effects of wildfires.
  You can check active wildfires around you, as well as air quality information. Any sort of  
     government-issued alerts and emergency orders will appear on your screen, should you need to  evacuate.
      You can also access a variety of links to purchase personal protection equipment on the  sidebar. </p>
</div> -->


<div class="aboutPage">
    <div class="aboutInfo">
        <h2>About</h2>
        <p>Project Gaea is here to help mitigate the drastic effects of wildfires.
            You can check active wildfires around you and retrieve air quality information.
            Government-issued alerts and emergency orders also appear on your screen, in the event that you would need to 
            evacuate. You can also access a variety of links to purchase personal protection equipment.
            Developed by a team of engineers at the University of Pennsylvania 
            during the 2020 wildfire outbreak and COVID-19 pandemic, Project Gaea is inteded to be a beginning
            format for helping those in need during natural disasters.</p>
    </div>
    <h3>The Team Behind the Project</h3>
    <div class="theTeam">
        <div class="column">
            <img src="../assets/deniz.png">
            <p>Deniz Enfiyeci</p>
            <p>EAS'21, NETS</p>
            <a href="https://www.linkedin.com/in/deniz-enfiyeci" style="text-decoration:none;" target="_blank">Visit on LinkedIn</a>
        </div>
        <div class="column">
            <img src="../assets/cassandra-2.png">
            <p>Cassandra Menshouse</p>
            <p>EAS'21, CMPE</p>
            <a href="https://www.linkedin.com/in/cassandra-menshouse" style="text-decoration:none;" target="_blank">Visit on LinkedIn</a>
        </div>
        <div class="column">
            <img src="../assets/rosie-1.png">
            <p>Rosie Murphy</p>
            <p>EAS'21, ESE</p>
            <a href="https://www.linkedin.com/in/maryrose-murphy-520536157" style="text-decoration:none;" target="_blank">Visit on LinkedIn</a>
        </div>
        <div class="column">
            <img src="../assets/derya.png">
            <p>Derya Yavuz</p>
            <p>EAS'21, CMPE</p>
            <a href="https://www.linkedin.com/in/derya-yavuz" style="text-decoration:none;" target="_blank">Visit on LinkedIn</a>
        </div>
    </div>
</div>
</template>

<style scoped>
.aboutPage img {
    height: 210px; /*6000 */
    width: 140px; /*4000 => factor of 1.5 */
    padding-left: 10px;
    padding-right: 10px;
}

.aboutPage {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.aboutPage h2 {
    color: #b3d7ff;
}

.aboutInfo {
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 2px;
    padding-top: 0px;
    font-family: Verdana;
}

.aboutPage p {
    color: rgb(221, 232, 243);
    
}

.aboutPage h3 {
    color: #b3d7ff;
}

.column {
    flex: 25%;
    padding-left: 10px;
    padding-right: 10px;
    display: inline-block;
}

.column p {
    color: rgb(221, 232, 243);
}

.column a {
    color: #4da3ff;
}

.column a:active {
    color: indianred;
}
</style>

