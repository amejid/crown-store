import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTJ-r2U7qq0Gl3gjkfMi1I7NXicTsg9t0",
  authDomain: "crown-db-5d243.firebaseapp.com",
  projectId: "crown-db-5d243",
  storageBucket: "crown-db-5d243.appspot.com",
  messagingSenderId: "669904185573",
  appId: "1:669904185573:web:b64c5b97afe5a82af08c0c"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) =>{
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName, email, createdAt, ...additionalInfo
      })
    }catch (error){
      console.log('Error creating user', error)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}