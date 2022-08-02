// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATU8x2QYjSuPyn0zfoTH2IduyhSM0WZs4",
  authDomain: "best-learning-tool-80e98.firebaseapp.com",
  databaseURL: "https://best-learning-tool-80e98-default-rtdb.firebaseio.com",
  projectId: "best-learning-tool-80e98",
  storageBucket: "best-learning-tool-80e98.appspot.com",
  messagingSenderId: "719424991756",
  appId: "1:719424991756:web:4c50bf57f5a98ba8847429",
  measurementId: "G-ZK5TQLZT1V"
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
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];


// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
// Create the reference location
let dbLocation = firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation.set(myFlashcards);
