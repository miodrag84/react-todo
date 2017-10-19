import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDl2th1qByQ5_p78ILD2DN0B1CQLcV1mlY",
    authDomain: "mead-todo-app-467bb.firebaseapp.com",
    databaseURL: "https://mead-todo-app-467bb.firebaseio.com",
    projectId: "mead-todo-app-467bb",
    storageBucket: "mead-todo-app-467bb.appspot.com",
    messagingSenderId: "957809112524"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Miki',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});
todoRef.push({
  text: 'Todo 2'
});
