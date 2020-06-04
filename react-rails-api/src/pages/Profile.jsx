import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { logoutUser } from 'reduxx';

import * as UsersAPI from 'services/Users';

const Profile = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const deleteUser = (user) => {
    UsersAPI.DeleteUser(user);
    dispatch(logoutUser())
  }
  const creationDate = ''

  return (
    <>
      <div>
        <h1>Hello {user.username}</h1>
        <h3>Prénom: {user.first_name}</h3>
        <h3>Nom: {user.last_name}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Date d'inscription: {creationDate}</h3>
        <button className="nav-item nav-link" onClick={()=> deleteUser(user)}>Delete User</button>
      </div>
    </>
  )
}

export default Profile;
