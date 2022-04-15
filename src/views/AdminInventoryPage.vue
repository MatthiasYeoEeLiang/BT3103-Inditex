<template>
    <NavBar/>
    <AdminInventory/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import AdminInventory from '../components/AdminInventory.vue'


export default {
    name: "LandingPage",

    components:{
        NavBar,
        AdminInventory,

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