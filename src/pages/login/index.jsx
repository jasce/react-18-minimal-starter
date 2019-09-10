import React, { Component } from 'react'
import { __fetchService } from 'src/helpers/fetch-service'
import { connect } from 'react-redux'
import { loginUser } from 'src/redux/action-creators'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state
    this.props.dispatch(loginUser({ username, password }))
  }

  render() {
    return (
      <div className="login-wrapper">
        <p>You must login to view protected routes..</p>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
          />
          <input
            name="password"
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form>
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
)(Login)
