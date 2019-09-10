import { __fetchService } from 'src/helpers/fetch-service'
import React, { Component, Fragment } from 'react'

class About extends Component {
  state = {
    loading: false,
    data: []
  }

  componentDidMount() {
    this.setState({ loading: true })
    __fetchService
      .fetch('getSomeData')
      .then(res => {
        this.setState({ data: res.data, loading: false })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { loading, data } = this.state
    return (
      <Fragment>
        {loading ? <p>Loading...</p> : null}
        {data.length ? (
          <Fragment>
            {data.map(item => (
              <p>Item: {item.name}</p>
            ))}
          </Fragment>
        ) : null}
      </Fragment>
    )
  }
}

export default About
