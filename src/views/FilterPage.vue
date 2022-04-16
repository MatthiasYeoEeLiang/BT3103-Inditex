<template>
<NavBar/>
<br>
<FilterPage/>

<!-- <img id = "bg" src="@/assets/Coins2.png" alt = ""> -->
</template>

<script>

import FilterPage from '@/components/Filter.vue'
import NavBar from '../components/NavBar.vue'


export default {
  name: 'App',
  components:{
    FilterPage,
    NavBar,

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
