// Import the functions you need from the SDKs you need

import { getDatabase, ref, set, update, child, get, onValue, remove } from  "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js ("https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js)";
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


const db = getDatabase();
const dbLocation = {};

dbLocation['deck/flashcards/'] = myFlashcards;
update (ref(db), dbLocation);



