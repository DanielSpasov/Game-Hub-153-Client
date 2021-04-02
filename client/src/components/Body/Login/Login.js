import { ToastContainer } from 'react-toastify'
import { auth } from '../../../utils/firebase'

import errorHandler from '../../../utils/errorHandler'

import './Login.css'

const Login = ({
    history
}) => {

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        auth.signInWithEmailAndPassword(username, password)
            .then(() => history.push('/'))
            .catch(errorHandler)
    }

    return (
        <div>

            <h1 className="login-section-title">Login</h1>

            <form onSubmit={onLoginFormSubmitHandler}>

                <label className="field-label">Username</label>
                <input className="login-field" type="text" name="username" />

                <label className="field-label">Password</label>
                <input className="login-field" type="password" name="password" />

                <br></br>

                <button className="login-button">Login</button>

            </form>

            <ToastContainer />
        </div >
    )
}

export default Login