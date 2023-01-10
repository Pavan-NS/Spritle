import {Component} from 'react'
import {Alert} from 'react-bootstrap'
import Home from './Home'
import './login.css'

class Login extends Component {
  state = {
    emailLog: '',
    passwordLog: '',
    flag: false,
    home: true,
  }

  setEmailLog = event => {
    this.setState({emailLog: event.target.value})
  }

  setPasswordLog = event => {
    this.setState({passwordLog: event.target.value})
  }

  handleLogin = event => {
    event.preventDefault()

    const pass = localStorage.getItem('pavanPassword').replace(/"/g, '')
    const mail = localStorage.getItem('pavanEmail').replace(/"/g, '')
    const {emailLog, passwordLog, home} = this.state
    if (!emailLog || !passwordLog) {
      this.setState({flag: true})

      console.log('EMPTY')
    } else if (passwordLog !== pass || emailLog !== mail) {
      this.setState({flag: true})
    } else {
      this.setState({home: !home})

      this.setState({flag: false})
    }
  }

  render() {
    const {emailLog, passwordLog, flag, home} = this.state
    return (
      <div className="container1">
        {home ? (
          <form onSubmit={this.handleLogin}>
            <h1 className="login">LogIn</h1>
            <div className="form-group">
              <label className="n" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={emailLog}
                className="form-control"
                placeholder="Enter email"
                onChange={this.setEmailLog}
              />
            </div>

            <div className="form-group">
              <label className="n" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                value={passwordLog}
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.setPasswordLog}
              />
            </div>

            <button type="submit" className="button">
              Login
            </button>

            {flag && (
              <Alert className="alert" color="primary" variant="warning">
                Fill correct Info else keep trying.
              </Alert>
            )}
          </form>
        ) : (
          <Home />
        )}
      </div>
    )
  }
}
export default Login
