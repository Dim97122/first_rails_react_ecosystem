import { AUTHENTICATE_USER, LOGOUT_USER } from './userType'

export const authenticateUser = (token, user) => {
  return {
    type: AUTHENTICATE_USER,
    payload: {
      token,
      user
    }
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}
