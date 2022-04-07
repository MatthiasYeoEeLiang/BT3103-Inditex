import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDEok4GYwQoHs2S49DS5g4ghCbX73L-OOU",
    authDomain: "refi-13f43.firebaseapp.com",
    projectId: "refi-13f43",
    storageBucket: "refi-13f43.appspot.com",
    messagingSenderId: "525616592765",
    appId: "1:525616592765:web:b11678c80300bb78653e14",
    measurementId: "G-JXEQPNLGCW"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export default firebaseApp;