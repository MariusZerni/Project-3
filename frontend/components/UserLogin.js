import React from 'react'
import axios from 'axios'
import auth from '../../backend/config/environment'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios
      .post('http://localhost:8001/login', this.state.data)
      .then(res => {
        const token = res.data.token
        auth.setToken(token)
        this.props.history.push('/home')
      })
      .catch(err => this.setState({ error: err.response.data.message }))
  }

  render() {
    const { error } = this.state
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Login</h1>
          <form className="form" onSubmit={event => this.handleSubmit(event)}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  onChange={event => this.handleChange(event)}
                  type="text"
                  name="email"
                  className="input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  onChange={event => this.handleChange(event)}
                  type="password"
                  name="password"
                  className="input"
                />
              </div>
              {error && <small className="help is-danger">{error}</small>}
            </div>
            <button className="button is-success">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login
