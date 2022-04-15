<template>
<NavBar/>
<ShoppingCart/>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'


export default {
  name: 'App',
  components:{
    NavBar,
    ShoppingCart,

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