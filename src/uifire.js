import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyABql-E2ANqU28nK7tqqF3bsCMZnvqtMEo",
  authDomain: "inditex-e4243.firebaseapp.com",
  projectId: "inditex-e4243",
  storageBucket: "inditex-e4243.appspot.com",
  messagingSenderId: "547277562732",
  appId: "1:547277562732:web:e75c61908243a34c7ec949"
};

firebase.initializeApp(firebaseConfig);

export default firebase;