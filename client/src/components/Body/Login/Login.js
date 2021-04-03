import { ToastContainer } from 'react-toastify'
import { auth } from '../../../utils/firebase'

import errorHandler from '../../../utils/errorHandler'

import './Login.css'

const Login = ({
    history
}) => {

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        auth.signInWithEmailAndPassword(email, password)
            .then(() => history.push('/'))
            .catch(errorHandler)
    }

    return (
        <div>

            <h1 className="login-section-title">Login</h1>

            <form onSubmit={onLoginFormSubmitHandler}>

                <label className="field-label">Email</label>
                <input className="login-field" type="text" name="email" placeholder="Email" />

                <label className="field-label">Password</label>
                <input className="login-field" type="password" name="password" placeholder="Repeat Password" />

                <br></br>

                <button className="login-button">Login</button>

            </form>

            <ToastContainer />
        </div >
    )
}

export default Login