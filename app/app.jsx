import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';

import {configure} from 'configureStore';
var store = configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    //store.dispatch(actions.startAddTodos());
    hashHistory.push('/genericpath');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
require('style!css!foundation-sites/dist/css/foundation-rtl.min.css');
$(document).foundation();

//App scss - this requires an additional loader sass
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);

// var React = require('react');
// var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// var Main = require('Main');
//
//
// // Load foundation
// $(document).foundation();
//
// //App scss - this requires an additional loader sass
// require('style!css!sass!applicationStyles')
//
// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );
