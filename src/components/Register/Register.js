import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


import errorHandler from '../../utils/errorHandler'

const db_uri = process.env.REACT_APP_DB_URI



const Register = () => {

    const history = useHistory()

    const onRegisterFormSubmitHandler = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        const rePassword = e.target.rePassword.value

        if (password !== rePassword) return toast.error('Passwords doesn\'t match.')

        axios.post(`${db_uri}/user/register`,
            { email, password, rePassword }
        )
            .then(() => history.push('/user/login'))
            .catch(errorHandler)
    }

    return (
        <section>

            <header>
                <h1>Register</h1>
            </header>

            <article>
                <form onSubmit={onRegisterFormSubmitHandler}>

                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" autoComplete="email" />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" autoComplete="new-password" />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="repeat-password">Repeat Password</label>
                        <input type="password" name="rePassword" placeholder="Repeat Password" autoComplete="new-password" />
                    </fieldset>

                    <button>Register</button>

                </form>
            </article>

            <ToastContainer />

        </section>
    )
}

export default Register