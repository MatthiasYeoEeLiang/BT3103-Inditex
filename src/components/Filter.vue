<template>

    <div class = "filterdropdowns" >
            <!-- <h1>Filter</h1> -->
            <label for="id_select"> Ocassion : </label>
        <select @change="handleChange" name="Category" id="Category" class="select-dropdown">
            
            <option value="1">formal</option>
            <option value="2">casual</option>
        
        </select>
                <label for="id_select"> Gender : </label>
            <select @change="handleChange1" name="Gender" id="Gender" class="select-dropdown">
                
                <option value="1">male</option>
                <option value="2">female</option>
            
        </select>

                <label for="id_select"> Price Range : </label>
            <select @change="handleChange2" name="PriceRange" id="PriceRange" class="select-dropdown">
                
                <option value="1">less than 50</option>
                <option value="2">more than 50</option>
            
        </select>
                <label for="id_select"> Size : </label>
            <select @change="handleChange3" name="Sizing" id="Sizing" class="select-dropdown">
                
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
            
        </select>

            <button class="button-6" @click="filter" id = "dmubutton">DRESS ME UP!</button>
            
    </div><br><br>

        <div class="row justify-content-center" id="products">
            <div class="card col-sm-4" v-for="item in chosen" :key="item" style="width: 18rem;">
                <img class="card-img-top" :src ="item.imageurl" alt="Card image cap">
                <div class="card-body">
                    
                    <p class="card-text">{{item.productdisplayname}}</p>
                    <p class="card-text">S${{item.price}}</p>
                    <p class="card-text">{{item.size}}</p>
                    <p class="card-text">{{item.gender}}</p>
                    <a href="#" class="btn btn-success" @click="addtocart(item.id)">Add to cart</a>
                </div>
            </div>
        </div>
    


</template>

<script>
import firebaseApp from "../firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { updateDoc, arrayUnion } from "firebase/firestore";
const db = getFirestore(firebaseApp);
//const this.start = ["formal", "male", "less than 50"];
//var arr2 = [];
export default {
  name: "FilterPage",
  data: () => {
    return {
      start: ["formal", "male", "less than 50", "S"],
      items: [],
      chosen: [],
      // fbuser:getAuth().currentUser.email
    };
  },

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },

  methods: {
    async filter() {
      this.chosen = [];
      let z = await getDocs(collection(db, "products"));
      z.forEach((docs) => {
        let yy = docs.data();

        //console.log(yy.productdisplayname)

        if (
          yy.category == this.start[0] &&
          yy.gender == this.start[1] &&
          this.start[2] == "less than 50" &&
          yy.size == this.start[3]
        ) {
          if (yy.price <= 50) {
            console.log(yy.productdisplayname);
            // this.chosen.push(yy.productdisplayname);
            this.chosen.push(yy);
          }
        }
        if (
          yy.category == this.start[0] &&
          yy.gender == this.start[1] &&
          this.start[2] == "more than 50" &&
          this.start[3] == yy.size
        ) {
          if (yy.price > 50) {
            console.log(yy.productdisplayname);
            // this.chosen.push(yy.productdisplayname);
            this.chosen.push(yy);
          }
        }
      });
      console.log(this.chosen);
      console.log(this.chosen[0].quantity);
      console.log("hello");
      console.log(this.fbuser);
    },
    handleChange(e) {
      if (e.target.options.selectedIndex > -1) {
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.start[0] = name;
        console.log(this.start[0]);
      }
    },
    handleChange1(e) {
      if (e.target.options.selectedIndex > -1) {
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.start[1] = name;
        console.log(this.start[1]);
      }
    },
    handleChange2(e) {
      if (e.target.options.selectedIndex > -1) {
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.start[2] = name;
        console.log(this.start[2]);
      }
    },

    handleChange3(e) {
      if (e.target.options.selectedIndex > -1) {
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.start[3] = name;
        console.log(this.start[3]);
      }
    },
    async addtocart(itemid) {
      try {
        this.fbuser = getAuth().currentUser.email;

        const washingtonRef = doc(db, "users", String(this.fbuser));
        await updateDoc(washingtonRef, {
          cart: arrayUnion(itemid),
        });
        var snap = await getDoc(doc(db, "users", String(this.fbuser)));
        console.log(snap.data().cart);
        alert("added, proceed to cart to checkout!")
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
      } catch {
        alert(
          "Please log in first and set account information under account link!!"
        );
      }
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr ;
  grid-auto-rows: 90%;
  /* grid-template-rows: 1fr 3fr; */
  /* gap: 10px;
  background-color: #2196F3;
  padding: 10px; */
  
}



.filtergrid{
    justify-self: center;
}

#products{
    gap: 5px 5px;
}

/* #pcard{
    justify-self: start;
    border: solid black;
    column-gap:2px;
    margin-bottom: 0%;
    
} */

/* .filterdropdowns {
    display: inline-block;

} */
select{
    display: inline-block;
    margin-right: 1rem;
}
.dmubutton {
    background-color:aquamarine;
    
}

.card-img-top {
    width: 100%;
    height: 19vw;
    object-fit: cover;
}

/* CSS */
.button-6 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

.select-dropdown,
.select-dropdown * {
  margin: 10;
  padding: 0;
  position: relative;
  box-sizing: border-box;
}
.select-dropdown {
  position: relative;
  background-color: #E6E6E6;
  border-radius: 4px;
}
.select-dropdown select {
  font-size: 1rem;
  font-weight: normal;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
  appearance: none;
}
.select-dropdown select:active, .select-dropdown select:focus {
  outline: none;
  box-shadow: none;
}
.select-dropdown:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 8px;
  width: 0;
  height: 0;
  margin-top: -2px;
  border-top: 5px solid #aaa;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
</style>