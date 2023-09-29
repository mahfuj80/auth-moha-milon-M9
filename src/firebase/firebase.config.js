// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAE7oIu2Pw_aPKBBxWmf2JS8mWnJ5i6p1s',
  authDomain: 'auth-moha-milon-e40b9.firebaseapp.com',
  projectId: 'auth-moha-milon-e40b9',
  storageBucket: 'auth-moha-milon-e40b9.appspot.com',
  messagingSenderId: '826798499374',
  appId: '1:826798499374:web:64a634205c55054528a1bf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
