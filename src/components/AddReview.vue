<template>
<!-- form -->

 <div class="name">
    <label for="name">Name</label>
    <textarea class="form-control" id="name" rows="1" required = "" placeholder="How do we adress you?"></textarea>
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
   
  <button type="submit" class="btn btn-success" @click="savereview()">Publish</button><br><br>

  <h2>How your friends feel about our products...</h2>

  <!-- cards -->
  <div class="row justify-content-center">
    <div class="card"  v-for="item in showrev" :key="item" style="width: 40rem">
    <br><br><br>
    <img class="card-img-top" :src="item[1]" alt="Card image cap" />
    <div class="card-body">
      <p class="card-text" >{{ "Customer: " + item[0] }}</p>
      <p class="card-text">{{ "Product: " + item[2] }}</p>
      <p class="card-text">{{ "Satisfied customer commented " + item[4] + ": " + item[3] }}</p>
    </div>
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
          showrev1.push([review1[i].name, products1[j].imageurl, review1[i].product, review1[i].comment, review1[i].datetimeofrev])
        }
      }
    }
    return showrev1
  }},

  methods: {
     async savereview() {
      
      var a = document.getElementById("name").value
      var b = document.getElementById("product").value
      var c = document.getElementById("comment").value
      var d = document.getElementById("size").value
      if(!a || !b || !c || !d) {
        alert("please fill in ALL the fields")
      } else {
      const f = new Date().toLocaleString()
      await addDoc(colRef, {
        name: a,
        product: b,
        comment: c,
        size: d,
        datetimeofrev: f
      })
      //let z = await getDocs(collection(db, "products"))
      //z.forEach((docs) => )
      
      window.location.reload();
    }}


  }
}
</script>


<style scoped>
.card{
  /* left: 39.3%; */
  width: 800px;

}
.card-img-top {
    width: 100%;
    height: 45vw;
    object-fit: cover;
}
</style>