import React from 'react'

const Notification = props => (
  <div className={`notification-wrapper ${props.show ? 'show' : ''}`}>
    {props.message ? <p>{props.message}</p> : null}
  </div>
)

export default Notification
