import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authenticateUser } from 'reduxx';
import * as UsersAPI from 'services/Users';


const UserForm = (props) => {
  const user = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    UsersAPI.ModifyUserRequest(props.user.id, first_name, last_name, username, email)
    .then(response => {
      dispatch(authenticateUser(token, user))
    })
  }
  return (
    <>
    <div>
      <form className="form p-4 mt-3 mb-3 rounded" onSubmit={submit} >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" className="form-control" placeholder={props.user.username} defaultValue={props.user.username} id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="first_name" className="form-control" placeholder={props.user.first_name} defaultValue={props.user.first_name} id="first_name" />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="last_name" className="form-control" placeholder={props.user.last_name} defaultValue={props.user.last_name} id="last_name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" placeholder={props.user.email} defaultValue={props.user.email} id="email" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  )
}

export default UserForm
