import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'

import UserContext from '../../contexts/UserContext'

import errorHandler from '../../utils/errorHandler'



const Login = () => {

    const history = useHistory()

    const { setUserData } = useContext(UserContext)

    const onLoginFormSubmitHandler = async (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        try {

            let loginReponse = await axios.post('http://localhost:5153/user/login', { email, password })
            setUserData({ token: loginReponse.data.token, user: loginReponse.data.user })
            localStorage.setItem('auth-token', loginReponse.data.token)
            history.push('/')

        } catch (err) {
            errorHandler(err)
        }
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