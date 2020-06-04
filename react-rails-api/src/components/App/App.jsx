import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import store from 'reduxx/store';

import GlobalNavbar from 'components/Navbars/GlobalNavbar'

import Home from 'pages/Home';
import Register from 'pages/Register';
import SignIn from 'pages/SignIn';
import Profile from 'pages/Profile';

import 'bootstrap/dist/css/bootstrap.css';
import 'style/App.css';

const App = () => {
  return (
    <>
      < Provider store={store}>
        < Router >
        < GlobalNavbar/>
          < Switch >
          < Route path="/profile">
            < Profile />
          </ Route>
            < Route path="/register">
              < Register />
            </ Route>
            < Route path="/signin">
              < SignIn />
            </ Route>
            < Route exact path="/">
              < Home />
            </ Route>
          </ Switch >
        </ Router >
      </ Provider>
    </>
  );
}

export default App;
