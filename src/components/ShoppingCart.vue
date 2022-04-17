<template >

  <div class="row justify-content-center">
    <div class="card col-sm-4"  v-for="item in items" :key="item" style="width: 18rem">
      <img class="card-img-top" :src="item.imageurl" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text" >{{ item.productdisplayname }}</p>
        <p class="card-text">S${{ item.price }}</p>
        <p class="card-text">{{ item.size }}</p>
        <p class="card-text">{{ item.gender }}</p>
        <a href="#" class="btn btn-danger" @click="removefromcart(item.id)" >Remove from cart</a>
      </div>
    </div>
  </div><br><br><br>

   <a href="#" class="btn btn-success" @click="purchaseitems" >CHECKOUT</a><br><br>

   


</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "../firebase.js";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  arrayRemove,
  updateDoc,
  arrayUnion,
  setDoc,
  increment,
  query,
  where
  
} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "ShoppingCart",

  data: () => {
    return {
      items: [],
    };
  },

    mounted() {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // this.user = user;
        display(user).then(
            val => {
            this.items = val
            }
)
        console.log(this.items)
      } 
    });

    async function display(user) {
      var product = [];
    //   const auth = await getAuth();
    //   console.log(auth);
      console.log("hello");
      console.log(user.email)
    //   const fbuser =  await auth.currentUser.email;
      var snap = await getDoc(doc(db, "users", String(user.email)));
      var cartarr = snap.data().cart;
      for (var index = 0; index < cartarr.length; index++) {
        let z = await getDocs(collection(db, "products"));
        z.forEach((docs) => {
          let yy = docs.data();
        //   console.log(yy.productdisplayname);
          

          if (yy.id == cartarr[index]) {
            product.push(yy);
            console.log("here1");
          }

        });
      }
      console.log("here2");
      return product;
    }
    console.log("here3");
  },

  methods: {
    async removefromcart(itemid) {
      this.fbuser= getAuth().currentUser.email;
      const washingtonRef = doc(db, "users", String(this.fbuser));
      await updateDoc(washingtonRef, {
            cart: arrayRemove(itemid)
      });
      var snap = await getDoc(doc(db, 'users', String(this.fbuser)));
            console.log(snap.data().cart);
       for (var index = 0; index < this.items.length; index++){
         if (this.items[index] == itemid) {
           if (index != -1) {
             this.items.splice(index, 1)
           }
         }
       }
       window.location.reload();
    },

    async purchaseitems() {
      var ids = []
      var outofstock = [];
      
      for (var idx = 0;  idx < this.items.length; idx++) {
        if(this.items[idx].quantity - 1 < 0) {
        //           alert("SORRY, WE'RE OUT OF STOCK FOR" + " " + this.items[ind].productdisplayname);
        //           continue;
          outofstock.push(this.items[idx].productdisplayname);
        }
      }

        if (outofstock.length != 0) {
          var outmess = "SORRY, WE ARE OUT OF STOCK FOR THESE ITEMS, PLEASE REMOVE FROM CART; ";
          for (var i = 0; i < outofstock.length; i++) {
            if (i == outofstock.length - 1){
            outmess += outofstock[i];
            } else {
              outmess += outofstock[i] + ", ";

            }


          }
          alert(outmess);
        } else {
          for (var ind = 0;  ind < this.items.length; ind++) {
            this.fbuser= getAuth().currentUser.email;
            const washingtonRef = doc(db, "users", String(this.fbuser));
            await updateDoc(washingtonRef, {
            purchased: arrayUnion(this.items[ind].id)
            });
            let z = await getDocs(collection(db, "products"))
              const citiesref = collection(db, "products");
              const q = query(citiesref, where("id", "==", this.items[ind].id))
              console.log(q)
              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                // setDoc(, { quantity:doc.data().quantity - 1 }, { merge: true });
                // updateDoc(, {quantity : increment(-1)})
                // doc.data() is never undefined for query doc snapshots
                ids.push(doc.id)
                console.log(doc.id, " => ", doc.data());
                console.log(doc.id)
              });
              console.log(ids)

            z.forEach((docs) => {
              let yy = docs.data();
                console.log(String(docs.data().quantity))
                console.log(String(docs.data().quantity))
              // console.log(docs.data().id)
              // console.log(yy)
              if (yy.id == this.items[ind].id) {
                // if (yy.quantity - 1 <0) {
                //   alert("SORRY, WE'RE OUT OF STOCK FOR" + " " + yy.productdisplayname);
                //   return;
                  
                // }
                // let correctquant = yy.quantity - 1;               
                // setDoc(docs, { quantity : correctquant}, {merge: true})
                const quantref = doc(db, "products", ids[ind])
                console.log(String(docs.data().quantity))
                updateDoc(quantref , {quantity: increment(-1)});
                console.log(String(docs.data().quantity))
              }
            });
          }
      
      //clear this.items array
      this.items.splice(0, this.items.length);
      //clear cart field in user document
      this.fbuser= getAuth().currentUser.email;
      const washingtonRef = doc(db, "users", String(this.fbuser));
      setDoc(washingtonRef, { cart: [] }, { merge: true });
      //var snap = await getDoc(doc(db, 'users', String(this.fbuser)));
      //console.log(snap.data().cart);
      //console.log(snap.data().purchased);
      this.$router.push('profile')
    }}
  }


};
</script>

<style scoped>
.grid-container {
  display: grid;
  /* grid-template-columns: 1fr 3fr ;
  grid-auto-rows: 90%; */
  /* grid-template-rows: 1fr 3fr; */
  /* gap: 10px;
  background-color: #2196F3;
  padding: 10px; */
}
/* .card{
  margin: 0 auto; 
  float: none; 
  margin-bottom: 10px;
} */

#pcard{
    justify-self: center;
}

.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>