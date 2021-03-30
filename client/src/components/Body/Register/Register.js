import { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'

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

        if (this.state.username === '') return toast.error('Username cannot be none.')
        if (this.state.password === '') return toast.error('Password cannot be none.')
        if (this.state.password !== this.state.rePassword) return toast.error('Passwords doesn\'t match.')
        if (this.state.username.length > 25) return toast.error('Username is too long.')

        userService.register(this.state.username, this.state.password)
            .then(() => this.props.history.push('/user/login'))
    }

    render() {
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

                    <button className="register-button" onClick={this.handleSubmit}>Register</button>

                </form>
                <ToastContainer />
            </div>
        )
    }
}

export default Register