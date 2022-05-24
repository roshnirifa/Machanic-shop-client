// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKx3jKPLgwJsLGSg1YinRnhf-pM6SkzKE",
    authDomain: "machanic-shop.firebaseapp.com",
    projectId: "machanic-shop",
    storageBucket: "machanic-shop.appspot.com",
    messagingSenderId: "475637742369",
    appId: "1:475637742369:web:360d7f47a03af18a395c60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;