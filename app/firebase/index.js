import firebase from 'firebase';

try {
var config = {
    apiKey: "AIzaSyDl2th1qByQ5_p78ILD2DN0B1CQLcV1mlY",
    authDomain: "mead-todo-app-467bb.firebaseapp.com",
    databaseURL: "https://mead-todo-app-467bb.firebaseio.com",
    projectId: "mead-todo-app-467bb",
    storageBucket: "mead-todo-app-467bb.appspot.com",
    messagingSenderId: "957809112524"
  };
  firebase.initializeApp(config);
} catch (e) {

}
export var firebaseRef = firebase.database().ref();
export default firebase;
