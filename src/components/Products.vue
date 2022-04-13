<template>
    <div class="card"  v-for="item in items" :key="item" style="width: 18rem;">
    <img class="card-img-top" src="/assets/logo.png" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">{{item}}</p>
        <p class="card-text">{{price}}</p>
        <p class="card-text">size</p>
        <p class="card-text">gender</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
    </div>

</template>
<script>
import {ref} from 'vue'
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
var price = ref(0);
const db = getFirestore(firebaseApp)
export default {
    name: 'ProDucts',

  data () {
    return {
        price: price,
        items:["hello","whats", "up"],
        }
    },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Hello")
        achievements();
      }
    });

    async function achievements() {
      let docRef = doc(db, "products", "vintagepants");
      let docSnap = await getDoc(docRef);

      price.value = docSnap.data().price;
    }
  }
}
</script>

<style scoped></style>