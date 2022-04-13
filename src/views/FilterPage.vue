<template>
<NavBar/>
<FilterPage/>
<Products/>
<!-- <img id = "bg" src="@/assets/Coins2.png" alt = ""> -->
</template>

<script>

import FilterPage from '@/components/Filter.vue'
import NavBar from '../components/NavBar.vue'
import Products from '../components/Products.vue'

export default {
  name: 'App',
  components:{
    FilterPage,
    NavBar,
    Products
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
