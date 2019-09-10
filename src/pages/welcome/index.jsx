import { __fetchService } from 'src/helpers/fetch-service'
import React, { Component } from 'react'

class Welcome extends Component {
  componentDidMount() {
    __fetchService
      .fetch('')
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return <h1>Welcome Aboard!</h1>
  }
}

export default Welcome
