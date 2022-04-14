<template>
<NavBar/>
<ProfileInfo/>
<!-- <img id = "bg" src="@/assets/Coins2.png" alt = ""> -->
</template>

<script>

import ProfileInfo from '@/components/ProfileInfo.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'App',
  components:{
    ProfileInfo,
    NavBar
  },
  data(){
    return{
      refreshComp:0
    }
  },
  methods:{
    change(){
      this.refreshComp += 1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#bg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>
