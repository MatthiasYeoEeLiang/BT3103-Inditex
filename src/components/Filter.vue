<template>
<div class="card"  v-for="item in chosen" :key="item" style="width: 18rem;">
    <img class="card-img-top" :src ="item.imageurl" alt="Card image cap">
    <div class="card-body">
        
        <p class="card-text">{{item.productdisplayname}}</p>
        <p class="card-text">{{item.price}}</p>
        <p class="card-text">{{item.size}}</p>
        <p class="card-text">{{item.gender}}</p>
        <a href="#" class="btn btn-primary" @click="addtocart(item.id)">Add to cart</a>
    </div>
 </div>

    <div class = "filterdropdowns">
        <h1>Filter</h1>
        <h3>Occasion</h3>  
    <select @change="handleChange" name="Category" id="Category">
           
         <option value="1">formal</option>
         <option value="2">casual</option>
       
   </select><br><br><br>
        <h3>Gender</h3>
       <select @change="handleChange1" name="Gender" id="Gender">
           
         <option value="1">male</option>
         <option value="2">female</option>
       
   </select><br><br><br>
        <h3>Price Range</h3>
       <select @change="handleChange2" name="PriceRange" id="PriceRange">
           
         <option value="1">less than 50</option>
         <option value="2">more than 50</option>
       
   </select><br><br><br>
          <h3>size</h3>
       <select @change="handleChange3" name="Sizing" id="Sizing">
           
         <option value="1">S</option>
         <option value="2">M</option>
         <option value="3">L</option>
       
   </select><br><br><br>

    <button @click="filter" id = "dmubutton">DRESS ME UP!</button>
    
   </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs,doc, getDoc} from "firebase/firestore";
import {  updateDoc, arrayUnion } from "firebase/firestore";
const db = getFirestore(firebaseApp);
//const this.start = ["formal", "male", "less than 50"];
//var arr2 = [];
export default {
    name: 'FilterPage',
    data: () => {
    return {
        start:["formal", "male", "less than 50", "S"],
        items:[],
        chosen:[],
        // fbuser:getAuth().currentUser.email
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        });},



   methods: {

       async filter() {
        this.chosen = [];
        let z = await getDocs(collection(db, "products"))
        z.forEach((docs) => {
            let yy = docs.data()
            
            //console.log(yy.productdisplayname)
           
            if (yy.category == this.start[0] && yy.gender == this.start[1] && this.start[2] == "less than 50" && yy.size == this.start[3]) {
                if (yy.price <= 50) {
                    console.log(yy.productdisplayname);
                   // this.chosen.push(yy.productdisplayname);
                    this.chosen.push(yy);
                }
            }
               if (yy.category == this.start[0] && yy.gender == this.start[1] && this.start[2] == "more than 50" && this.start[3] == yy.size) {
                if (yy.price > 50) {
                    console.log(yy.productdisplayname);
                   // this.chosen.push(yy.productdisplayname);
                    this.chosen.push(yy);
                }
            }
        })
        console.log(this.chosen)
        console.log(this.chosen[0].quantity)
        console.log("hello")
        console.log(this.fbuser)
    
        
       },
        handleChange(e) {
        if(e.target.options.selectedIndex > -1) {
        
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.start[0] = name;
        console.log(this.start[0]);
         
        }
    },
        handleChange1(e) {
        if(e.target.options.selectedIndex > -1) {
        
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.start[1] = name;
        console.log(this.start[1]);
        }
    },
        handleChange2(e) {
        if(e.target.options.selectedIndex > -1) {
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.start[2] = name;
        console.log(this.start[2]);
        }
    },
    
        handleChange3(e) {
        if(e.target.options.selectedIndex > -1) {
        
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.start[3] = name;
        console.log(this.start[3]);
        }
    },
        async addtocart(itemid){
            this.fbuser= getAuth().currentUser.email;
            const washingtonRef = doc(db, "users", String(this.fbuser));
            await updateDoc(washingtonRef, {
            cart: arrayUnion(itemid)
            });
            var snap = await getDoc(doc(db, 'users', String(this.fbuser)));
            console.log(snap.data().cart)
        //var snap = await getDoc(doc(db, 'users', String(this.fbuser)));
        //snap.update({cart : db.firestore.cart.arrayUnion(itemid)})
        //console.log(snap.data().cart)
        //var snap = db.collection("users").doc(String(this.fbuser))
        //snap.update({cart: fieldValue.arrayUnion(itemid)})
                // try {
                //     const auth = getAuth();
                //     this.fbuser = auth.currentUser.email;
                //     this.db.collection("users").doc("limngeefengz@gmail.com").update({cart : itemid});
        
                // //     const docRef = await getDoc(doc(db, "users", String(this.fbuser)), {
                // //         cart.push(itemid) 
                // //     })
                // //     console.log(docRef)
                // //     this.$emit("added")
                // }
                // catch(error) {
                //     console.error("Error adding document: ", error);
                // }
            }
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