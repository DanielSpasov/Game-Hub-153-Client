import { Component } from 'react'
import { withCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify'

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

        if (this.state.username === '') return toast.error('Username cannot be none.')
        if (this.state.password === '') return toast.error('Password cannot be none.')

        userService.login(this.state.username, this.state.password)
            .then(token => cookies.set('x-auth-token', token.token))
            .then(() => userService.verifyToken(document.cookie.split('x-auth-token=')[1])
                .then(userInfo => {
                    if (userInfo) {
                        this.props.setAppState({ id: userInfo.id, username: userInfo.username })
                    }
                }))
            .then(() => toast.success('Successful Login.'))
            // .then(() => this.props.history.push('/'))
            .catch(err => { console.log(err); toast.error('Wrong username or password.') })
    }

    render() {
        return (
            <div>

                <h1 className="login-section-title">Login</h1>

                <form onSubmit={this.handleSubmit}>

                    <label className="field-label">Username</label>
                    <input className="login-field" type="text" value={this.state.username} onChange={this.handleUsernameChange} />

                    <label className="field-label">Password</label>
                    <input className="login-field" type="password" value={this.state.password} onChange={this.handlePasswordChange} /><br></br>

                    <button className="login-button" onClick={this.handleSubmit}>Login</button>

                </form>
                <ToastContainer />
            </div>
        )

    }

}

export default withCookies(Login)