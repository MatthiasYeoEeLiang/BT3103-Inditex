<template>
    <NavBar/>
    <div> <h3><strong> My Account </strong> </h3> </div>
    <div class ="grid-container"  v-if="user">
    <div class ="purchases" v-if="user">
        <h3 id = "mainHead">Purchases</h3>
        <Checkouted/>
    </div>
            <div v-if="user">
            <form class="information">
            <div>
                <img src="@/assets/profilepic.png" style="width:75px; height:75px; border-radius:8px; border:4px" />
            </div><br><br>
            <div>
                <p> Name: <strong>{{user.displayName}}</strong><br>
                Email:<strong>{{user.email}}</strong><br>
                Coins:<strong>{{coin}}</strong> <br></p><br>
                <button id = "addinfo" type = "button" @click="$router.push('infopage')"> Account Information </button><br><br>
                </div>
                <LogOut/>
            </form>
            </div>
    </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
import LogOut from '@/components/LogOut.vue'
// import Product from '@/components/Product.vue'
// import ShoppingCart from '@/components/ShoppingCart.vue'
import Checkouted from '@/components/Checkouted.vue'
import NavBar from '../components/NavBar.vue'
import {ref} from 'vue'
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore";
import {doc, getDoc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
var coin = ref(0);
const db = getFirestore(firebaseApp);
export default {
    name: 'ProFile',
    components:{
        // NavBar,
        // Product,
        NavBar,
        Checkouted,
        LogOut
    },
    data() {
        return {
            user: false,
            coin: coin,
            products: []
            
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                display(user);
            }
        });
    async function display(user) {
        let docRef = doc(db, "users", String(user.email));
        let docSnap = await getDoc(docRef);
      coin.value = docSnap.data().coin;
    }
    }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  .grid-container {
    display: grid;
    grid-template-columns: 5fr 1fr;

  }

  body {
    font-family: 'montseratt', sans-serif;
  }
  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .products {
    /* display: flex; */
    /* max-width: 1280px; */
    padding: 25px;
    /* margin: 0 auto; */
    width: 100%;
    /* text-align: left;
    align-content: left;
    align-items: left;
    justify-content: left; */
  }
  form.information {
      /* margin-left: 70%;
      align-items: right; */
  }
  #addinfo{
    background: rgb(7, 24, 7);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
}
</style>