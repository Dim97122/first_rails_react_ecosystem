import React from 'react';
import { useHistory } from "react-router-dom";

import * as UsersAPI from 'services/Users';


const RegisterForm = () => {
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password_confirmation = document.getElementById('password_confirmation').value;
    UsersAPI.RegisterUserRequest(first_name, last_name, username, email, password, password_confirmation)
    .then(history.push('/signin'))
  }

  return (
    <>
      <div>
        <form className="form p-4 mt-3 mb-3 rounded" onSubmit={submit} >
          <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            <input type="text" className="form-control" placeholder="Enter First Name" id="first_name" />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" className="form-control" placeholder="Enter Last Name" id="last_name" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" className="form-control" placeholder="Enter email" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" placeholder="Enter email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password confirmation:</label>
            <input type="password" className="form-control" placeholder="Confirm password" id="password_confirmation" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
