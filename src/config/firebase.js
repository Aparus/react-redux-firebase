import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyD-ZnOjxzDdgMEJKOVvHpPLUQWQxTIpQ3I',
    authDomain: 'marioplan-58907.firebaseapp.com',
    databaseURL: 'https://marioplan-58907.firebaseio.com',
    projectId: 'marioplan-58907',
    storageBucket: 'marioplan-58907.appspot.com',
    messagingSenderId: '763989227498',
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })
///
export default firebase
