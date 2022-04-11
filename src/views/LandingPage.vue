<template>
    <NavBar/>
    <img alt="background" src="../assets/charles-etoroma-k78R0lDxd48-unsplash.png" class = "background">
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    name: "LandingPage",

    components:{
        NavBar
    }
}
</script>

<style scoped>
.background {
  max-height: 100vh;
  width: 100%;
  object-fit: cover;
}
</style>