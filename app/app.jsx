var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');


var actions = require('actions');
var store =  require('configureStore').configure();
import firebase from 'app/firebase';
import router from 'app/router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

//load foundations
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();


require('style!css!sass!applicationStyles')

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
replace('/');
}
next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
replace('/todos');
}
next();
};

ReactDOM.render(
  <Provider store={store}>
  {router}
  </Provider>,
  document.getElementById('app')
);
