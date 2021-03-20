import { Component } from 'react'


import userService from '../../../services/userService'

import './Register.css'

class Register extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            rePassword: '',
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRePasswordChange = this.handleRePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    handleRePasswordChange(e) {
        this.setState({ rePassword: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        userService.register(this.state.username, this.state.password)
        this.props.history.push('/')
    }

    render() {

        let registerButton
        let username = this.state.username
        let password = this.state.password
        let rePassword = this.state.rePassword

        if (username !== '' && password !== '' && rePassword !== '' && password === rePassword) {
            registerButton = <button className="register-button" onClick={this.handleSubmit}>Register</button>
        }

        return (
            <div>

                <h1 className="register-section-title">Register</h1>

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="username" className="field-label">Username</label>
                    <input className="register-field" type="text" value={this.state.username} onChange={this.handleUsernameChange} />

                    <label htmlFor="password" className="field-label">Password</label>
                    <input className="register-field" type="password" value={this.state.password} onChange={this.handlePasswordChange} />

                    <label htmlFor="repeat-password" className="field-label">Repeat Password</label>
                    <input className="register-field" type="password" value={this.state.rePassword} onChange={this.handleRePasswordChange} /><br></br>

                    {registerButton}

                </form>

            </div>
        )
    }
}

export default Register