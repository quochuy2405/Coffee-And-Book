
import firebase from 'firebase/app';
import 'firebase/auth'
 
  const firebaseConfig_login = {
    apiKey: "AIzaSyAJBnJGtaLGyct6EJPFDr6EaFlTQ0Rt3JM",
    authDomain: "loginfb-5b94a.firebaseapp.com",
    projectId: "loginfb-5b94a",
    storageBucket: "loginfb-5b94a.appspot.com",
    messagingSenderId: "305410042006",
    appId: "1:305410042006:web:34a77c6aa7b719eb693ab7",
    measurementId: "G-KWDN1YFHS3"
  };
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig_login);
 }else {
    firebase.app(); // if already initialized, use that one
 }

 const auth=firebase.auth();
 const facebookProvider = new firebase.auth.FacebookAuthProvider()
export {auth,facebookProvider};



