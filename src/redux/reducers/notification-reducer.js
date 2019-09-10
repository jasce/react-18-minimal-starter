import { ACTIONS } from 'src/helpers/constants'

const initialState = {
  message: '',
  show: false
}

export const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_NOTIFICATION: {
      return {
        ...state,
        show: true,
        message: action.payload && action.payload
      }
    }
    case ACTIONS.HIDE_NOTIFICATION: {
      return {
        ...state,
        show: false,
        message: ''
      }
    }
    default:
      return state
  }
}
