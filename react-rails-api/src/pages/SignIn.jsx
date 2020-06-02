import React from 'react';
import { useSelector } from 'react-redux';

import SignInForm from 'components/Forms/SignInForm';

const SignIn = () => {
  const token = useSelector(state => state.token);

  if (token !== undefined) {
    return (
      <>
        <h1>Connecté</h1>
      </>
    )
  }

  return (
    <>
      <h1>Veuillez vous connecter svp</h1>
      < SignInForm />
    </>
  )
}

export default SignIn;
