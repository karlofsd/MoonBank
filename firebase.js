import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
//import from './js'
import { REACT_API_KEY, REACT_AUTH_DOMANAIN, REACT_DATABASE_URL,
    REACT_PROJECT_ID, REACT_STOREAGE_BUCKET, REACT_MESSAGING_SENDER_ID,
    REACT_APP_ID, REACT_MEASUREMENT_ID } from 'react-native-dotenv';





const db = firebase.initializeApp({
    apiKey: {REACT_API_KEY},
    authDomain: {REACT_AUTH_DOMANAIN},
    databaseURL: {REACT_DATABASE_URL},
    projectId:{ REACT_PROJECT_ID},
    storageBucket: {REACT_STOREAGE_BUCKET},
    messagingSenderId:{ REACT_MESSAGING_SENDER_ID},
    appId: {REACT_APP_ID},
    measurementId: {REACT_MEASUREMENT_ID}
  });

export const auth = db.auth()
 export const storage = db.storage()
export default db