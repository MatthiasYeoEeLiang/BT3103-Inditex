<template>
    <NavBar/>
    <AdminInventory/>
    <AdminUsers/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import AdminInventory from '../components/AdminInventory.vue'
import AdminUsers from '../components/AdminUsers.vue'


export default {
    name: "LandingPage",

    components:{
        NavBar,
        AdminInventory,
        AdminUsers,

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