import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDWXEqei6pLfasXL7smwbW9ttg-8baFBko',
  authDomain: 'musiccenter-64827.firebaseapp.com',
  projectId: 'musiccenter-64827',
  storageBucket: 'musiccenter-64827.appspot.com',
  messagingSenderId: '779866542638',
  appId: '1:779866542638:web:02fcf54783aed8dc9245bf'
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => {
  return app
}

export const getFirestore = () => {
  return firebase.firestore(app)
}
