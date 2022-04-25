import React from 'react'
///import { Route, Navigate } from 'react-router-dom'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const usePrivateRoute = () => {
  const {isLoggedIn} = useSelector(({auth}) => auth)
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />
}

export default usePrivateRoute
