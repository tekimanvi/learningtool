// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCspDhXXbGc_9QL4O__q_Fj4uCRGo8X8no",
    authDomain: "learning-tool-a009b.firebaseapp.com",
    projectId: "learning-tool-a009b",
    storageBucket: "learning-tool-a009b.appspot.com",
    messagingSenderId: "211877966558",
    appId: "1:211877966558:web:4e9bfd8644e8f4ceb2884f",
    measurementId: "G-Y3S585J5NW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "imag/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];


let dbLocation = firebase.database().ref('deck/flashcards'); 
dbLocation.set(myFlashcards);

// As before,make the database point to the location where the data exists
// If the location doesn't exist it will be created but there will be nothing to retirieve
let fc = firebase.database().ref('deck/flashy');

// A variable to store the JSON results in a human readable format
let jsonString;

// Tell Firebase to retrieve your data
fc.on("value", function(retrieve) {
  
    //Get the raw JSON data back from the database
    let queryData = retrieve.val();
    
    // Turn the data into a JSON String
    jsonString = JSON.stringify(queryData);
});

// Print the data out as a JSON string or otherwise manipulate it
console.log (' JSON string:' + jsonString )





