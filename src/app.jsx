import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import Routes from './routes'

// import {
//     BrowserRouter as Router
// } from "react-router-dom";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
