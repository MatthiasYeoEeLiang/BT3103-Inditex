import { initializeApp } from 'firebase/app';

import 'firebase/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyABql-E2ANqU28nK7tqqF3bsCMZnvqtMEo",
  authDomain: "inditex-e4243.firebaseapp.com",
  projectId: "inditex-e4243",
  storageBucket: "inditex-e4243.appspot.com",
  messagingSenderId: "547277562732",
  appId: "1:547277562732:web:e75c61908243a34c7ec949"
};

  const firebaseApp = initializeApp(firebaseConfig);

  export default firebaseApp;
