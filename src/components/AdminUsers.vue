<template>
  <h3>Customers</h3><br><br>
  <button id = show type="button" :onclick="mounted"> Show </button><br>
  <table id= "custable">
    <thead>
      <tr>
        <th>Email</th>
        <th>Gender</th>
        <th>Phone no.</th>
        <th>Coins</th>
        <th>Birthday</th>
        <th>Cart</th>
        <th>Purchased</th>
      </tr>
    </thead>
  </table>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);


export default {
  name: 'AdminUsers',


  methods: {
    mounted() {
      async function display(){
      let z = await getDocs(collection(db, "users"))
      let ind = 1;
      z.forEach((docs) => {
        let yy = docs.data()
        var table = document.getElementById("custable")
        var row = table.insertRow(ind);

        var name = yy.email;
        var gender = yy.gender;
        var phone = yy.phonenum;
        var birthday = yy.birthday;
        var coins = yy.coin;
        var cart = yy.cart;
        var purchased = yy.purchased;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = name;
        cell2.innerHTML = gender;
        cell3.innerHTML = phone;
        cell4.innerHTML = coins;
        cell5.innerHTML = birthday;
        cell6.innerHTML = cart;
        
        cell7.innerHTML = purchased;
        
        console.log(yy.purchased)
      })
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