<template>
<section>
      <br><br><br><br><br>
      <div class="container">
          <h2>Upload a review and get 10 coins!</h2>
          <form> 
            <div class="pdt-name">
              <!-- <label for="product-name"> Please enter a valid product name</label>
              <input type="text" id="product-name" required="">
              <button @click="handleInput"> Check validity</button> -->
              <treeselect v-model="value" :multiple="true" :options="options" />
            </div>
          </form>


          
          <form @submit.prevent="handleSubmit">
              
              <div class="form-group">
                  <label for="review">Leave a review...</label>
                  <textarea id="review" rows="5" v-model="review"></textarea>
              </div>

              <button @click="add10Coins" type="submit">Submit</button>
          </form>
      </div>
      <br><br><br><br><br><br><br><br><br><br><br><br>

      <div>
        <div class="container">
                <!--top------------------------->
                <div class="box-top">
                    <!--profile----->
                    <div class="profile">
                        <!--img---->
                        <div class="profile-img">
                            <img src="images/c-1.jpg" />
                        </div>
                        <!--name-and-username-->
                        <div class="name-user">
                            <strong>Jack Ho</strong>
                            <span>@jackho</span>
                        </div>
                    </div>
                    <!--reviews------>
                    <div class="reviews">
                        &starf;
                        &bigstar;
                        &starf;
                        &bigstar;
                        &star;
                    </div>
                </div>
                <!--Comments---------------------------------------->
                <div class="client-comment">
                    <p> 
                      Product: {{ value }} <br>
                      Review: {{ review }}

                    </p>
                </div>
            </div>
          
          
      </div>
  </section>
  
</template>
double
<script>
//import { projectFirestore } from '../firebase/config'
// import the component
import Treeselect from 'vue3-treeselect'
  // import the styles
import 'vue3-treeselect/dist/vue3-treeselect.css'
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
  
} from "firebase/firestore";
const db = getFirestore(firebaseApp);
export default {
  components: { Treeselect },
    data() {
        return {
          value: null,
          options: [ {
            id:'male',
            label:'male',
            children: [{
              id:'casual',
              label:'casual',
              children: [{
                id:'Relaxed-fit trousers',
                label:'Relaxed-fit trousers'
              }, {
                id: 'Cargo-Pants',
                label: 'Cargo-Pants'
              },
              {
                id: 'Straight-cut Trousers',
                label: 'Straight-cut Trousers'
              },{
                id: 'Striped T-shirt',
                label: 'Striped T-shirt'
              },{
                id: 'Colored T-shirt',
                label: 'Colored T-shirt'
              }, {
                id:'Worded T-shirt',
                label: 'Worded T-shirt'
              },{
                id:'Stretchy Poplin Shirt',
                label:'Stretchy Poplin Shirt'
              }
              ]
            }, {
              id:'formal',
              label:'formal',
              children: [{
                id:'Stretched Formal Shirt',
                label:'Stretched Formal Shirt'
              }, {
                id: 'Easy Care Textured Shirt',
                label: 'Easy Care Textured Shirt'
              },
              {
                id: 'Dark Blue Office Pants',
                label: 'Dark Blue Office Pants'
              },{
                id: 'Beige Office Pants',
                label: 'Beige Office Pants'
              },{
                id: 'Grey Office Pants',
                label: 'Grey Office Pants'
              }]

            }]
          }, {
            id:'female',
            label:'female',
            children: [{
              id:'casual',
              label:'casual',
              children: [{
                id:'Bell-Bottom Jeans',
                label:'Bell-Bottom Jeans'
              }, {
                id: 'Loose Joggers',
                label: 'Loose Joggers'
              },
              {
                id: 'Distressed Jeans',
                label: 'Distressed Jeans'
              },{
                id: 'Colored Tank Top',
                label: 'Colored Tank Top'
              },{
                id: 'Oversized T-shirt',
                label: 'Oversized T-shirt'
              }, {
                id:'Striped T-shirt with Cartoon',
                label: 'Striped T-shirt with Cartoon'
              }
              ]
            }, {
              id:'formal',
              label:'formal',
              children: [{
                id:'White Linen Shirt',
                label:'White Linen Shirt'
              }, {
                id: 'Satin-Finish Shirt',
                label: 'Satin-Finish Shirt'
              },
              {
                id: 'Oversized Poplin Shirt',
                label: 'Oversized Poplin Shirt'
              },{
                id: 'Pink Trousers',
                label: 'Pink Trousers'
              },{
                id: 'Green Office Trousers',
                label: 'Green Office Trousers'
              },{
                id: 'Pleated Trousers',
                label: 'Pleated Trousers'
              }]

            }]

          }],
            
            
            review: ''
        }
    },

    methods: { 
      async add10Coins() {
        this.fbuser= getAuth().currentUser.email;
        const washingtonRef = doc(db, "users", String(this.fbuser));
        var snap = await getDoc(doc(db, 'users', String(this.fbuser)));
        setDoc(washingtonRef, { coin: snap.data().coin + 10 }, { merge: true });
        console.log(snap.data().coin);

      }
    }
}

</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat";
}
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000033;
  border-radius: 8px;
}
.form-group {
  margin-top: 20px;
  font-size: 20px;
  color: #9e9e9e;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}
textarea {
  resize: vertical;
}
button {
  
  border: none;
  padding: 5px;
  background-color: black;
  color: aliceblue;
  
  cursor: pointer;
  
}
*{
    margin: 0px;
    padding: 0px;
    font-family: poppins;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
#testimonials{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
}
.testimonial-heading{
    letter-spacing: 1px;
    margin: 30px 0px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.testimonial-heading h1{
    font-size: 2.2rem;
    font-weight: 500;
    background-color: #202020;
    color: #ffffff;
    padding: 10px 20px;
}
.testimonial-heading span{
    font-size: 1.3rem;
    color: #252525;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.testimonial-box-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width:100%;
    
}
.testimonial-box{
    width:90px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.1);
    background-color: #ffffff;
    padding: 20px;
    margin: 15px;
    cursor: pointer;
    justify-content: center;
    
}
.profile-img{
    width:50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
}
.profile-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.profile{
    display: flex;
    align-items: center;
}
.name-user{
    display: flex;
    flex-direction: column;
}
.name-user strong{
    color: #3d3d3d;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
}
.name-user span{
    color: #979797;
    font-size: 0.8rem;
}
.reviews{
    color: #f9d71c;
}
.box-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.client-comment p{
    font-size: 0.9rem;
    color: #4b4b4b;
}
.testimonial-box:hover{
    transform: translateY(-10px);
    transition: all ease 0.3s;
}
 

::selection{
    color: #ffffff;
    background-color: #252525;
}
 
</style>