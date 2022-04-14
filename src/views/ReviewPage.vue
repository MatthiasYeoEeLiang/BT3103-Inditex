<template>
  <NavBar/>
  <AddReview/>
  <SeeReview/>
</template>

<script>
import AddReview from '@/components/AddReview.vue'
import SeeReview from '@/components/SeeReview.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components:{
    AddReview,
    NavBar,
    SeeReview
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