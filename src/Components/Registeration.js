import {Component} from 'react'
import {Alert} from 'react-bootstrap'
import Login from './Login'
import './register.css'

class Registeration extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    phone: '',
    flag: false,
    login: true,
  }

  onChangeSetName = event => {
    this.setState({name: event.target.value})
  }

  onChangeSetEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeSetPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSetPhone = event => {
    this.setState({phone: event.target.value})
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const {name, email, password, phone, login} = this.state
    if (!name || !email || !password || !phone) {
      this.setState({flag: true})
    } else {
      this.setState({flag: false})
      localStorage.setItem('pavanEmail', JSON.stringify(email))
      localStorage.setItem('pavanPassword', JSON.stringify(password))
      console.log('Saved in Local Storage')
      this.setState({login: !login})
    }
  }

  handleClick = () => {
    const {login} = this.state
    this.setState({login: !login})
  }

  render() {
    const {login, flag, name, password, email, phone} = this.state
    return (
      <div className="container">
        {login ? (
          <form className="form" onSubmit={this.handleFormSubmit}>
            <h3 className="reg">Register</h3>

            <div className="form-group">
              <label className="n" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                id="name"
                value={name}
                onChange={this.onChangeSetName}
              />
            </div>

            <div className="form-group">
              <label className="n" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="form-control"
                placeholder="Enter email"
                onChange={this.onChangeSetEmail}
              />
            </div>

            <div className="form-group">
              <label className="n" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                value={password}
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.onChangeSetPassword}
              />
            </div>

            <div className="form-group">
              <label className="n" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                value={phone}
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={this.onChangeSetPhone}
              />
            </div>

            <button type="submit" className="button">
              Register
            </button>
            <button type="button" onClick={this.handleClick} className="button">
              Already registered log in?
            </button>
            {flag && (
              <Alert className="flag" color="primary" variant="danger">
                Please fill the all Details!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    )
  }
}
export default Registeration
