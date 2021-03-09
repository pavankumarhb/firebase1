import firebase from 'firebase/app';
import 'firebase/auth';
export default async ( { Vue } )=>{
let firebaseConfig = {
    apiKey: "AIzaSyA-1f9JuE-S5ZPRHCA_t_AqfBzzTZ_19LQ",
    authDomain: "fir-1-c0211.firebaseapp.com",
    projectId: "fir-1-c0211",
    storageBucket: "fir-1-c0211.appspot.com",
    messagingSenderId: "1075106145676",
    appId: "1:1075106145676:web:a94d4c59bf6a208b54e2a9",
    measurementId: "G-2F70WVF9WM"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.auth().languageCode='en';
  Vue.prototype.$Auth=firebase.auth;
}