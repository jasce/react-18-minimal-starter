import { ACTIONS } from 'src/helpers/constants'

const initialState = {
  isLoggedIn: false,
  token: null
}

export const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload && action.payload
      }
    }
    case ACTIONS.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        token: null
      }
    }
    default:
      return state
  }
}
