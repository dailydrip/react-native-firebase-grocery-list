const firebase = require('firebase')
import { API_KEY } from 'react-native-dotenv'

// Initialize Firebase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "dailydrip-firebase-test.firebaseapp.com",
  databaseURL: "https://dailydrip-firebase-test.firebaseio.com",
  storageBucket: "dailydrip-firebase-test.appspot.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp
