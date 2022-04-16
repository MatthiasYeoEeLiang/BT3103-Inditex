<template>
<!-- form -->
  <div class="email">
    <label for="exampleInputEmail">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required = "">
  </div><br>

   <div class="product">
    <label for="product">Product</label>
    <textarea class="form-control" id="product" rows="1" required = "" placeholder="product name"></textarea>
  </div><br>

   <div class="size">
    <label for="size">Size me up!</label>
    <textarea class="form-control" id="size" rows="1" required = "" placeholder="S,M,L?"></textarea>
  </div><br>

   <div class="comment">
    <label for="comment">Write your review! We value your opinions!</label>
    <textarea class="form-control" id="comment" rows="3" required = "" placeholder="Tell us!"></textarea>
    </div><br>
  <button type="submit" class="btn btn-success" @click="savereview()">Publish</button>

  <!-- cards -->
  <div class="card"  v-for="item in showrev" :key="item" style="width: 18rem">
    <img class="card-img-top" :src="item[1]" alt="Card image cap" />
    <div class="card-body">
      <p class="card-text" >{{ "Customer: " + item[0] }}</p>
      <p class="card-text">{{ "Product: " + item[2] }}</p>
      <p class="card-text">{{ "Satisfied review made on " +new Date().toLocaleString()+": " + item[3] }}</p>
    </div>
  </div>

</template>

<script>
import firebaseApp from '../firebase.js';
//import {getAuth} from "firebase/auth";
import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore"
//import { doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);
const colRef = collection(db, "reviews");
export default {
  name: 'AddReview',
  
    data: () => {
    return {
        //review: [],
        //products: [],
        showrev: []
        }
    },
  
  mounted() {
    display().then(val => {this.showrev = val})
  async function display() {
    var review1 = [];
    var products1 = [];
    var showrev1 = [];
    let z = await getDocs(collection(db, "products"));
    z.forEach((docs => {
      let yy = docs.data()
        products1.push(yy)

    }))
    let r = await getDocs(collection(db, "reviews"))
    r.forEach((docs) => {
      let rr = docs.data()
      review1.push(rr)
    })
    for (var i = 0; i < review1.length; i++) {
      for (var j = 0; j < products1.length; j++){
        if (review1[i].product == products1[j].productdisplayname && review1[i].size == products1[j].size){
          showrev1.push([review1[i].email, products1[j].imageurl, review1[i].product, review1[i].comment])
        }
      }
    }
    return showrev1
  }},

  methods: {
     async savereview() {
      var a = document.getElementById("email").value
      var b = document.getElementById("product").value
      var c = document.getElementById("comment").value
      var d = document.getElementById("size").value
      const f = ""
      await addDoc(colRef, {
        email: a,
        product: b,
        comment: c,
        size: d,
        field: f
      })
      //let z = await getDocs(collection(db, "products"))
      //z.forEach((docs) => )
      
      window.location.reload();
    }


  }
}
</script>

<style scoped>

</style>