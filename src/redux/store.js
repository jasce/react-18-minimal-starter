import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { AuthenticationReducer } from 'src/redux/reducers/authentication-reducer'
import { NotificationReducer } from 'src/redux/reducers/notification-reducer'

const reducers = combineReducers({
  auth: AuthenticationReducer,
  notification: NotificationReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
