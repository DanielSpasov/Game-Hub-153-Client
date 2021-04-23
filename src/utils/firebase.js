import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAXa7Mh1i7RVuKPsEY280g8eLSENfMOPbA",
    authDomain: "game-hub-5bf9e.firebaseapp.com",
    projectId: "game-hub-5bf9e",
    storageBucket: "game-hub-5bf9e.appspot.com",
    messagingSenderId: "417317366351",
    appId: "1:417317366351:web:eae86145ed7cc68791d83a"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase
export const auth = firebase.auth()
export const db = firebase.firestore()