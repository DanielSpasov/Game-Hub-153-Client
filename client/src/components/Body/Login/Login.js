import { Component } from 'react'
import { withCookies } from 'react-cookie'
import userService from '../../../services/userService'

import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const { cookies } = this.props
        userService.login(this.state.username, this.state.password)
            .then(token => cookies.set('auth-token', token))
            .then(() => this.props.history.push('/'))
            .catch(err => console.log(err))
    }

    render() {

        let loginButton
        let username = this.state.username
        let password = this.state.password

        if (username !== '' && password !== '') {
            loginButton = <button className="login-button" onClick={this.handleSubmit}>Login</button>
        }
        console.log(this.props.cookies)
        return (
            <div>

                <h1 className="login-section-title">Login</h1>

                <form onSubmit={this.handleSubmit}>

                    <label className="field-label">Username</label>
                    <input className="login-field" type="text" value={this.state.username} onChange={this.handleUsernameChange} />

                    <label className="field-label">Password</label>
                    <input className="login-field" type="password" value={this.state.password} onChange={this.handlePasswordChange} /><br></br>

                    {loginButton}

                </form>

            </div>
        )

    }

}

export default withCookies(Login)