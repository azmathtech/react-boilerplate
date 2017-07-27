import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from'react-router';

import Main from 'Main';
import Login from 'Login';
import firebase from 'app/firebase';
import genericComponent from 'GenericComponent';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/genericpath');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="genericpath" component={genericComponent}></Route>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
