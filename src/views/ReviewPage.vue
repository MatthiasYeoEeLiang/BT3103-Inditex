<template>
  <NavBar/>
  <br><br><br>
  <AddReview/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AddReview from '@/components/AddReview.vue'
//import SeeReview from '@/components/SeeReview.vue'

export default {
  name: 'App',
  components:{
    AddReview,
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

<style>

</style>