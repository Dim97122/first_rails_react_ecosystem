import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { authenticateUser } from 'reduxx';
import * as UsersAPI from 'services/Users';

const SignInForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    UsersAPI.SignInUserRequest(email, password)
    .then(response => {
      dispatch(authenticateUser(response.token, response.user))
    })
    history.push('/profile')
  }

  return (
    <>
      <div>
        <form className="form p-4 mt-3 mb-3 rounded" onSubmit={submit} >
          <div className="form-group">
            <label htmlFor="email">Email ou Username</label>
            <input type="email" className="form-control" placeholder="Enter email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" id="password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default SignInForm
