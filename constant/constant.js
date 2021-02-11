import * as firebase from 'firebase';
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAjHRO65hxUSkFd0AS6nj_XtxkUzNy8nGU",
    authDomain: "loginwithfirebase-25973.firebaseapp.com",
    projectId: "loginwithfirebase-25973",
    storageBucket: "loginwithfirebase-25973.appspot.com",
    messagingSenderId: "234062560576",
    appId: "1:234062560576:web:7939e58f3869a2ec6b8ea5"
  };

  let app;

  if(firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig);
  }
  else {
      app = firebase.app()
  }


const auth = firebase.auth()

export {auth}

