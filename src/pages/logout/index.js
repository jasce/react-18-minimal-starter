import React, { Component } from 'react'
import { __fetchService } from 'src/helpers/fetch-service'
import { connect } from 'react-redux'
import { logoutUser } from 'src/redux/action-creators'

class Logout extends Component {
  handleLogoutClick = () => {
    this.props.dispatch(logoutUser())
  }

  render() {
    return (
      <div className="login-wrapper">
        <button onClick={this.handleLogoutClick}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(
  mapStateToProps,
  null
)(Logout)
