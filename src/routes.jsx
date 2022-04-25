import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import NavBar from 'src/components/navbar'
import Notification from 'src/components/notification'
import Signup from 'src/pages/signup'
import About from 'src/pages/about'
import Welcome from 'src/pages/welcome'
import Login from 'src/pages/login'
import Logout from 'src/pages/logout'
import usePrivateRoute from 'src/hooks/usePrivateRoute'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { __fetchService } from 'src/helpers/fetch-service'

function RoutesManager() {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  let {isLoggedIn, show, message} = useSelector(({auth, notification}) => ({
    isLoggedIn: auth.isLoggedIn,
    show: notification.show,
    message: notification.message
  }))

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch({ type: 'LOGIN', payload: token })
    }
  }, [])


  useEffect(() => {
    if (isLoggedIn) {
      navigate && navigate("/welcome", { replace: true });
    }
  }, [isLoggedIn])
  return (
    <>
      <Notification show={show} message={message} />
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={usePrivateRoute()} >
          <Route exact path="/about" element={<About />} />
          <Route exact path="/welcome" element={<Welcome />} />
        </Route>
        {isLoggedIn ? (
          <Route path="/logout" element={<Logout />} />
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  )
}

export default RoutesManager
