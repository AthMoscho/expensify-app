import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCe-BP908OKIKJKlMXoCE7IADmgSqsSI8k",
    authDomain: "expensify-athmosh.firebaseapp.com",
    databaseURL: "https://expensify-athmosh.firebaseio.com",
    projectId: "expensify-athmosh",
    storageBucket: "expensify-athmosh.appspot.com",
    messagingSenderId: "477515873473",
    appId: "1:477515873473:web:2034aa4ca5f2da084ee840"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
      name: 'Ath Mosh'
  })