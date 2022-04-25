import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

import App from './app'
import './styles/app.scss'

const Test = props => (
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
)
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Test />, container)

export default Test
