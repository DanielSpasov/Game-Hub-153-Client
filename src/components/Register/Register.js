import { ToastContainer, toast } from 'react-toastify'
import {auth} from '../../utils/firebase'

import errorHandler from '../../utils/errorHandler'

import './Register.css'

const Register = ({
    history
}) => {

    const onRegisterFormSubmitHandler = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        const rePassword = e.target.rePassword.value

        if(password !== rePassword) return toast.error('Passwords doesn\'t match.')

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => history.push('/'))
            .catch(errorHandler)
    }

    return (
        <div>

            <h1 className="register-section-title">Register</h1>

            <form onSubmit={onRegisterFormSubmitHandler}>

                <label htmlFor="email" className="field-label">Email</label>
                <input className="register-field" type="text" name="email" placeholder="Email" />

                <label htmlFor="password" className="field-label">Password</label>
                <input className="register-field" type="password" name="password" placeholder="Password" />

                <label htmlFor="repeat-password" className="field-label">Repeat Password</label>
                <input className="register-field" type="password" name="rePassword" placeholder="Repeat Password" />

                <br></br>

                <button className="register-button">Register</button>

            </form>
            <ToastContainer />
        </div>
    )
}

export default Register