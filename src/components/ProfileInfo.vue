<template>
    <!-- <div id = "logged" v-if="user" > -->
    <div id = "container">
    <form id = "myform">
        <h2>Setup your account to get 50 coins!</h2>

        <div class = "formli" >
        <label for="name1"><i> Name: </i></label> <br>
        <input type="text" id = "name1" required ="required"> <br><br>

        <label for="gender1"><i> Gender: </i></label> <br>
        <select name="gender" id="gender1">
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select><br><br>

        <label for="num1"><i> Phone Number: </i></label> <br>
        <input type="number" id = "num1" required ="required" placeholder="eg. 91234567"> <br><br>

        <label for="date1"><i> Birthday: </i></label> <br>
        <input type="date" id = "date1" required="required" placeholder=" "> <br><br>

        </div>
    </form>

        <div class = "save">
            <button id = "savebutton" type = "submit" @click="savetofs()"> Save Information </button>
        </div>
        <!-- </div>
    </form> -->
    </div>
<!-- </div> -->
</template>

<script>
import firebaseApp from '../firebase.js';
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { doc, setDoc, getDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);
// const auth = getAuth();
// this.fbuser = auth.currentUser.email;

export default {
    methods:{
        async savetofs(){
            var a = document.getElementById("name1").value
            const b = 50

            const f = []
            const g = []
            const h = String(getAuth().currentUser.email);
            var c = document.getElementById("gender1").value
            var d = document.getElementById("num1").value
            var e = document.getElementById("date1").value
            if(!a || !d || !e) {
                alert("Please fill up all the fields. We want to know EVERYTHING about you.")
            } else {
                const auth = getAuth();
                this.fbuser = auth.currentUser.email;
                let doccRef = await doc(db, "users",String(this.fbuser));
                let docSnap = await getDoc(doccRef);
                if (docSnap.exists()) {
                    setDoc(doccRef, { name: a, gender: c, phonenum: d, birthday: e, email: h }, { merge: true });
                } else {
                const docRef = await setDoc(doc(db, "users", String(this.fbuser)), {
                    name: a, coin: b, gender: c, phonenum : d, birthday: e, cart: f, purchased : g, email : h
                })
                console.log(docRef)}
                document.getElementById('myform').reset();
                this.$emit("added")
            }
        }
    }

}
</script>

<style scoped>


.formli{
display: inline-block;
text-align: center;
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
}

input:hover {
    box-shadow: 3px 3px purple;
    border-radius: 2px
}

.save{
    text-align: center ;
}

  #savebutton{
    background: rgb(7, 24, 7);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
}
</style>