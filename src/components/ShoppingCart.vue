<template >
  <div class="card"  v-for="item in items" :key="item" style="width: 18rem">
    <img class="card-img-top" :src="item.imageurl" alt="Card image cap" />
    <div class="card-body">
      <p class="card-text" >{{ item.productdisplayname }}</p>
      <p class="card-text">{{ item.price }}</p>
      <p class="card-text">{{ item.size }}</p>
      <p class="card-text">{{ item.gender }}</p>
      <a href="#" class="btn btn-danger" @click="removefromcart(item.id)" >Remove from cart</a>
    </div>
  </div>

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
    }
  }


};
</script>

<style scoped>
</style>