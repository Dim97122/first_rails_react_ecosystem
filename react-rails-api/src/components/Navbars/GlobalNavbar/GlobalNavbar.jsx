import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import * as UsersAPI from 'services/Users';

const GlobalNavbar = () => {

  useEffect(() => {

  }, [])


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
