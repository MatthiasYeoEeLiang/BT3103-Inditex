<template>

    
    <div class = "filterdropdowns">
        <h1>Filter</h1>
        <h3>Occasion</h3>  
    <select @change="handleChange" name="Category" id="Category">
           
         <option value="1">Formal</option>
         <option value="2">Casual</option>
       
   </select><br><br><br>
        <h3>Gender</h3>
       <select @change="handleChange1" name="Gender" id="Gender">
           
         <option value="1">Male</option>
         <option value="2">Female</option>
       
   </select><br><br><br>
        <h3>Price Range</h3>
       <select @change="handleChange2" name="PriceRange" id="PriceRange">
           
         <option value="1">less than 50</option>
         <option value="2">50-100</option>
       
   </select><br><br><br>

    <button @click="filter" id = "dmubutton">DRESS ME UP!</button>
    
   </div>

    

    
</template>
<script>
const arr = ["Former", "Male", "less than 50"];

export default {
    name: 'FilterPage',


   methods: {
       filter() {
        console.log(arr);
        
       },

        handleChange(e) {
        if(e.target.options.selectedIndex > -1) {
        
        var name = e.target.options[e.target.options.selectedIndex].text;

        arr[0] = name;
        console.log(arr[0]);
         

        }
    },

        handleChange1(e) {
        if(e.target.options.selectedIndex > -1) {
        
        var name = e.target.options[e.target.options.selectedIndex].text;

        arr[1] = name;
        console.log(arr[1]);
        }
    },

        handleChange2(e) {
        if(e.target.options.selectedIndex > -1) {

        var name = e.target.options[e.target.options.selectedIndex].text;

        arr[2] = name;
        console.log(arr[2]);
        }
    },
    }
    
    }



</script>

<style scoped>
.filterdropdowns {
    margin-right: 85%;
    margin-bottom: 80%;
    
  
}

.dmubutton {
    background-color:aquamarine;
}

</style>



