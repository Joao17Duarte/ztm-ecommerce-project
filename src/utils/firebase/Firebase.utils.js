import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAbNFPOa4VV_jHwvrbc6N9BkiHkdOJC7Ho',
  authDomain: 'ztm-ecommerce-a1b72.firebaseapp.com',
  projectId: 'ztm-ecommerce-a1b72',
  storageBucket: 'ztm-ecommerce-a1b72.appspot.com',
  messagingSenderId: '1036948810384',
  appId: '1:1036948810384:web:d4f60ae649b87944b8c615',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef
}
