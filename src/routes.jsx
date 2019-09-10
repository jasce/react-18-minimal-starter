import React, { Fragment, Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router'
import { connect } from 'react-redux'
import NavBar from 'src/components/navbar'
import Notification from 'src/components/notification'
import Signup from 'src/pages/signup'
import About from 'src/pages/about'
import Welcome from 'src/pages/welcome'
import Login from 'src/pages/login'
import Logout from 'src/pages/logout'
import PrivateRotue from 'src/hoc/private-route'

import { BrowserRouter as Router } from 'react-router-dom'

import { __fetchService } from 'src/helpers/fetch-service'

const createRedirect = to => () => <Redirect to={to} />

class Routes extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.dispatch({ type: 'LOGIN', payload: token })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
      this.props.history && this.props.history.push('/')
    }
  }

  render() {
    const { show, message, isLoggedIn } = this.props
    return (
      <Router>
        <Fragment>
          <Notification show={show} message={message} />
          <NavBar isLoggedIn={isLoggedIn} />
          <Switch>
            <PrivateRotue
              path="/about"
              component={About}
              isLoggedIn={isLoggedIn}
            />
            <PrivateRotue
              path="/welcome"
              component={Welcome}
              isLoggedIn={isLoggedIn}
            />
            {isLoggedIn ? (
              <Route path="/logout" component={Logout} />
            ) : (
              <div>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </div>
            )}
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  const { show, message } = state.notification
  const { isLoggedIn, token } = state.auth
  return {
    show,
    message,
    isLoggedIn,
    token
  }
}
export default connect(
  mapStateToProps,
  null
)(withRouter(Routes))
