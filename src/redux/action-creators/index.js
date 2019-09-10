import { __fetchService } from 'src/helpers/fetch-service'

export const loginUser = data => dispatch => {
  const config = {
    method: 'POST',
    body: JSON.stringify(data)
  }

  __fetchService
    .fetch(`login`, config)
    .then(res => {
      localStorage.setItem('token', res.token)
      dispatch({ type: 'LOGIN', payload: res.token })
    })
    .catch(err => {
      console.error(err)
    })
}

export const logoutUser = () => dispatch => {
  __fetchService
    .fetch(`logout`)
    .then(res => {
      localStorage.clear()
      dispatch({ type: 'LOGOUT' })
    })
    .catch(err => {
      console.error(err)
    })
}
