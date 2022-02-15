import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBSfdvQuZH7KKCdN3gqOR0a3xJGd2VNUrY",
    authDomain: "crown-db-13eff.firebaseapp.com",
    projectId: "crown-db-13eff",
    storageBucket: "crown-db-13eff.appspot.com",
    messagingSenderId: "756100329743",
    appId: "1:756100329743:web:af36c4b68e871901410e7a",
    measurementId: "G-1025KSWN21"
}


// firebase.initializeApp(config)
firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;