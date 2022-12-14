// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "satclass-a5290.firebaseapp.com",
  projectId: "satclass-a5290",
  storageBucket: "satclass-a5290.appspot.com",
  messagingSenderId: "285580112685",
  appId: "1:285580112685:web:xxxxxxxxxxxxxxxxxxxx",
  measurementId: "G-ESSDV2P1WP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var arr = [];
var InpTask = document.getElementById("inptask");
var listUL = document.getElementById("listUL");

function listul() {
    listUL.innerHTML = "";
    for(var i=0; i < arr.length; i++){
        listUL.innerHTML += `<li>${arr[i].task} <br />
        <span>${arr[i].time}</span>
        </li>`
    }
}

window.addTask = function (e) {
  e.preventDefault();
  var model = {
    task: InpTask.value,
    time: `${new Date().getDate()}-${
      new Date().getMonth() + 1
    }-${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    username : "Adnan",
  };
  arr.push(model);
  InpTask.value = "";
  listul();
}


window.logout = function () {
    signOut(auth)
      .then(function () {
        console.log("Logout Successfully");
      window.location.replace('login.html')
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  
  function checkAuthentication() {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }
  checkAuthentication();
  
