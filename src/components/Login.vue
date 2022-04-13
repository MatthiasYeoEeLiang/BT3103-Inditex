<template>
    <div style = "text-align:center;">
        <h1 id = "mainHead">INDITEX</h1>
        <div id= "firebaseui-auth-container"></div>
        <div id="pagecontent">
            Crypto Paper Portfolio (CPP) is an app to track your crypto portfolio. <br>
            Enter coin details and get real time Profit and Loss update of your Portfolio.
        </div>
        <h5>copyright@cpp-2021</h5>
    </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
    name:"LogIn",

    mounted() {
        //Calling the ui instance
        var ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui){
            //We need to create the instance only one time
            // Initialise the FirebaseUI Widget using Firebase.
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }

        var uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]

        };
        ui.start("#firebaseui-auth-container", uiConfig)
    }
}
</script>

<style scoped>
/* h2{
background-color: rgb(129, 184, 99);
}


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
} */
form {
    max-width: 600px;
    margin: 30px auto;
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display:inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: bordre-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width:16px;
    margin: 0 10px 0;
    position: relative;
    top: 2px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0 ;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    background: #eee;
}

button {
    background: rgb(7, 24, 7);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>