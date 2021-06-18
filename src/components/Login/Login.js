import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import UserContext from '../../contexts/UserContext'

import userService from '../../services/userService'

import errorHandler from '../../utils/errorHandler'



const Login = () => {

    const history = useHistory()

    const { setUserData } = useContext(UserContext)

    const onLoginFormSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            const email = e.target.email.value
            const password = e.target.password.value

            let loginRes = await userService.login(email, password, setUserData)
            if (loginRes) history.push('/')

        } catch (err) { errorHandler(err) }
    }

    return (
        <section>

            <header>
                <h1>Login</h1>
            </header>

            <article>
                <form onSubmit={onLoginFormSubmitHandler}>

                    <fieldset>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" autoComplete="email" />
                    </fieldset>

                    <fieldset>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Repeat Password" autoComplete="current-password" />
                    </fieldset>

                    <button>Login</button>

                </form>
            </article>

            <ToastContainer />

        </section >
    )
}

export default Login