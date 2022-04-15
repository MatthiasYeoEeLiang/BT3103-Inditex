import { initializeApp } from 'firebase/app';

import 'firebase/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyBSvugO6UJLoSpk11wwTEAjdMAppkdcVpQ",
  authDomain: "test-8ce05.firebaseapp.com",
  projectId: "test-8ce05",
  storageBucket: "test-8ce05.appspot.com",
  messagingSenderId: "446362681776",
  appId: "1:446362681776:web:a22cd8662c1a0648cb5675"
};

  const firebaseApp = initializeApp(firebaseConfig);

  export default firebaseApp;
