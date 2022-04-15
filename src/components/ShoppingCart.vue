<template>
    <div class="card"  v-for="item in items" :key="item" style="width: 18rem;">
    <img class="card-img-top" :src ="item.imageurl" alt="Card image cap">
    <div class="card-body">
        
        <p class="card-text">{{item.productdisplayname}}</p>
        <p class="card-text">{{item.price}}</p>
        <p class="card-text">{{item.size}}</p>
        <p class="card-text">{{item.gender}}</p>



    </div>
     </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
import firebaseApp from '../firebase.js';
import { getFirestore, doc, getDoc, getDocs, collection} from "firebase/firestore"
const db = getFirestore(firebaseApp);

export default {
    name: "ShoppingCart",

    data: () => {
    return {
        items:[],
        // fbuser: ""
        }
    },

  mounted(){
  const auth = getAuth();      
    onAuthStateChanged(auth, (user) => {
        if (user) {
            this.user = user;
        }
    });
    this.addtocart(this.user)},
  methods: {

        // addtocart(user)
        async addtocart(user) {
            let docRef = await doc(db, "users", String(user.email));
            let docSnap = await getDoc(docRef);
            this.items = [];
            //var snap = await getDoc(doc(db, 'users', String(this.user.email)));
            let cartarr = docSnap.data().cart;
            for (var index = 0; index < cartarr.length; index++) {
                let z = await getDocs(collection(db, "products"));
                        z.forEach((docs) => {
                        let yy = docs.data()
                        
                        //console.log(yy.productdisplayname)
                    
                        if (yy.id == cartarr[index]) {
                        
                                this.items.push(yy);
                            
                        }
                    })
            }
        }
  }
}


</script>

<style scoped>

</style>
