import firebase from 'firebase';

try {
var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  };
  firebase.initializeApp(config);
} catch (e) {

}

var firebaseRef = firebase.database().ref();

// firebaseRef.set({
//   app: {
//     name: 'Todo App',
//     version: '1.0.0'
//   },
//   isRunning: true,
//   user: {
//     name: 'Miki',
//     age: 25
//   }
// });

// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', snapshot) => {
//   console.log('New todo added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'Todo 1'
// });
// todoRef.push({
//   text: 'Todo 2'
// });
