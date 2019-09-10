import React, { Component } from 'react'
import { __fetchService } from 'src/helpers/fetch-service'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    const { username, password } = this.state
    __fetchService
      .fetch(`/login?username=${username}&password=${password}`)
      .then(res)
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
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
        <input
          name="email"
          onChange={this.handleChange}
          type="email"
          value={this.state.email}
        />
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}

export default Signup
