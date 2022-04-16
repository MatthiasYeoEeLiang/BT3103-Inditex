<template>
  <h3>Products</h3><br><br>
  <button id = show type="button" :onclick="mounted"> Show </button><br>
  <table id= "table">
    <thead>
      <tr>
        <th>id</th>
        <th>PDN</th>
        <th>price</th>
        <th>size</th>
        <th>category</th>
        <th>gender</th>
        <th>quantity</th>
      </tr>
    </thead>
  </table>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged} from "firebase/auth";

const db = getFirestore(firebaseApp);


export default {
  name: 'AdminInventory',


  methods: {
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
          if (user) {
              this.user = user;
              display(user);
          }
      });
      async function display(user){
      let docRef = await doc(db, "admin",String(user.email));
      let docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      let z = await getDocs(collection(db, "products"))
      let ind = 1;
      z.forEach((docs) => {
        let yy = docs.data()
        var table = document.getElementById("table")
        var row = table.insertRow(ind);

        var id = yy.id;
        var productdisplayname = yy.productdisplayname;
        var price = yy.price;
        var category = yy.category;
        var size = yy.size;
        var gender = yy.gender;
        var quantity = yy.quantity;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = id;
        cell2.innerHTML = productdisplayname;
        cell3.innerHTML = price;
        cell4.innerHTML = size;
        cell5.innerHTML = category;
        cell6.innerHTML = gender;
        
        cell7.innerHTML = quantity;
        
        console.log(yy.quantity)
      })

      } else {
        alert("Sorry you are not an admin!");
        console.log("No such document !");
      }
    }
    display()

    
    },
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}

.background {
  max-height: 100vh;
  width: 100%;
  object-fit: cover;
}
table {
    border: black;
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    font-family: arial, sans-serif;
}

th,td {
    border:1px  black solid;
    text-align: center;
    padding: 8px;
}
</style>