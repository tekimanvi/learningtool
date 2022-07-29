<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyATU8x2QYjSuPyn0zfoTH2IduyhSM0WZs4",
    authDomain: "best-learning-tool-80e98.firebaseapp.com",
    projectId: "best-learning-tool-80e98",
    storageBucket: "best-learning-tool-80e98.appspot.com",
    messagingSenderId: "719424991756",
    appId: "1:719424991756:web:4c50bf57f5a98ba8847429",
    measurementId: "G-ZK5TQLZT1V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
