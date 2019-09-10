import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  // componentDidUpdate(prevProps) {
  //   if(prevProps.isLoggedIn !== this.props.isLoggedIn) {
  //       this.props.history && this.props.history.push('/');
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <Link to="/welcome">Home</Link>
        <Link to="/about">About</Link>
        {this.props.isLoggedIn ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </React.Fragment>
    )
  }
}

export default Navbar
