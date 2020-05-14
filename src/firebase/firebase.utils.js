import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA32zn0f91xy7dc7dsUNZ7YawbrQGPqKCc",
    authDomain: "akclothingdb.firebaseapp.com",
    databaseURL: "https://akclothingdb.firebaseio.com",
    projectId: "akclothingdb",
    storageBucket: "akclothingdb.appspot.com",
    messagingSenderId: "45221581044",
    appId: "1:45221581044:web:f9817f86a1bf9c091fcea1",
    measurementId: "G-5YC2VTHKLH",
};

export const createUserProfileDocument = async (user, otherData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
