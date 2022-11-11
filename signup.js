 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyC_jKckReMMBORrTn11z-kH-AfmhmG1lQk",
   authDomain: "practice-authentication-3a372.firebaseapp.com",
   projectId: "practice-authentication-3a372",
   storageBucket: "practice-authentication-3a372.appspot.com",
   messagingSenderId: "984885608444",
   appId: "1:984885608444:web:c31de3054e010c625ffc79",
   measurementId: "G-ZDJHMEH6DN"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const auth = getAuth();


var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var passowrd = document.getElementById('passowrd');

window.signup = function (e){
    e.preventDefault();
    var obj = {
        firstname : firstname.value,
        lastname : lastname.value,
        email : email.value,
        passowrd : passowrd.value,
    };

    createUserWithEmailAndPassword(auth , obj.email , obj.passowrd)
    .then(function(success){
        console.log(success.user.uid);
      window.location.replace('login.html')
    })
    .catch(function(err){
        console.log(err);
    })
}

