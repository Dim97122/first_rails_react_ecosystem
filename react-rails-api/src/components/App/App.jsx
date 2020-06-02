import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import GlobalNavbar from 'components/Navbars/GlobalNavbar'

import Home from 'pages/Home';
import Register from 'pages/Register';
import SignIn from 'pages/SignIn';

import 'bootstrap/dist/css/bootstrap.css';
import 'style/App.css';

const App = () => {
  return (
    <>
    < Router >
      < GlobalNavbar/>
        < Switch >
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
    </>
  );
}

export default App;
