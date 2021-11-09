
import firebase from 'firebase/app';
import 'firebase/storage';
  const firebaseConfig_uploadImg= {
    apiKey: 'AIzaSyCIhTdWK_MLBADGH5G8Rp3buQBPeDq0PW8',
    authDomain: 'upload-image-9b971.firebaseapp.com',
    projectId: 'upload-image-9b971',
    storageBucket: 'upload-image-9b971.appspot.com',
    messagingSenderId: '820137042225',
    appId: '1:820137042225:web:70ed2e330abe1317c7d010',
    measurementId: 'G-LYGWFXB5RT',
  };
  const firebaseConfig_login = {
    apiKey: "AIzaSyAJBnJGtaLGyct6EJPFDr6EaFlTQ0Rt3JM",
    authDomain: "loginfb-5b94a.firebaseapp.com",
    projectId: "loginfb-5b94a",
    storageBucket: "loginfb-5b94a.appspot.com",
    messagingSenderId: "305410042006",
    appId: "1:305410042006:web:34a77c6aa7b719eb693ab7",
    measurementId: "G-KWDN1YFHS3"
  };
 
   firebase.initializeApp(firebaseConfig_uploadImg);
  const storage = firebase.storage()


export {storage};
