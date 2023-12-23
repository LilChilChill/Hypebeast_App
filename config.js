import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={ 
    apiKey: "AIzaSyCQoRUQbtLMCsC1Hpz4U7T9ivOi2Q7qqkw",
    authDomain: "application-ad2af.firebaseapp.com",
    projectId: "application-ad2af",
    storageBucket: "application-ad2af.appspot.com",
    messagingSenderId: "470507722155",
    appId: "1:470507722155:web:5f11731a45da0c72422eee",
    measurementId: "G-1FHS2JBY3S"
}
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};
