<template>
    <NavBar/>
    <img alt="background" src="../assets/charles-etoroma-k78R0lDxd48-unsplash.png" class = "background">
    <br><br>
    <div class="boxed">
        <h5>About Us</h5>
        <p>Our team has developed an e-commerce website for Inditex which is an integrated web application which combines the catalog of all the child brands of Inditex to come up with an outfit styled just for you. </p>
        <p>This platform was made to raise brand awareness for the brands under inditex that are currently struggling due to the pandemic</p>
    </div><br>
</template>

<script>
import NavBar from '../components/NavBar.vue'


export default {
    name: "LandingPage",

    components:{
        NavBar,

    }
}
</script>

<style scoped>
.background {
  max-height: 100vh;
  width: 100%;
  object-fit: cover;
}
/* .boxed {
  border: 1px solid green ;
  margin-bottom: 0;
} */
p{
    margin-bottom: 0px;
    padding: auto;
}
</style>