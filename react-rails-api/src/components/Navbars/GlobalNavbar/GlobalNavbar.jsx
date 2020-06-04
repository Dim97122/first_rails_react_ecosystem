import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logoutUser } from 'reduxx';
import * as UsersAPI from 'services/Users';

const GlobalNavbar = () => {
  const user = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const disconnectUser = () => {
    UsersAPI.Logout();
    dispatch(logoutUser())
  }


  if ( token !== undefined ) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
          <Link to="/">
            <div className="navbar-brand">LOGO</div>
          </Link>
          <Link to="/profile">
            <div className="navbar-brand">Profil</div>
          </Link>
          <button className="nav-item nav-link" onClick={()=> disconnectUser()}>Déconnexion</button>          
        </nav>
      </>
    )
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
        <Link to="/">
          <div className="navbar-brand">LOGO</div>
        </Link>
        <div className="navbar-nav">
          <Link to="/register">
            <div className="nav-item nav-link">Inscription </div>
          </Link>
          <Link to="/signin">
            <div className="nav-item nav-link">Connexion </div>
          </Link>
          <div>Non connecté</div>
        </div>
      </nav>
    </>
  )
}
export default GlobalNavbar;
