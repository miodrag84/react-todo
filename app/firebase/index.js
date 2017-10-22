import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAX_EQCpipBWg_qfiYpP323hkj0MgnZ8R0",
    authDomain: "todo-app-ac6f7.firebaseapp.com",
    databaseURL: "https://todo-app-ac6f7.firebaseio.com",
    //projectId: process.env.PROJECT_ID,
    storageBucket: "todo-app-ac6f7.appspot.com",
    //messagingSenderId: process.env.MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
