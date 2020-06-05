import { AUTHENTICATE_USER, LOGOUT_USER } from './userType';


const initialState = {
  user: "not_authenticated",
  token: undefined
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: "not_authenticated",
        token: undefined
      }
    default:
      return state
  }
}

export default userReducer
