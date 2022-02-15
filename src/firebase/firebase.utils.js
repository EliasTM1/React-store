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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get()
    console.log(snapshot)

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error Creating User', error.message)

        }
    }

    return userRef;

}

// firebase.initializeApp(config)
firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase; 