import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import userService from '../../services/userService'

import errorHandler from '../../utils/errorHandler'



const Register = () => {

    const history = useHistory()

    const onRegisterFormSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            const email = e.target.email.value
            const password = e.target.password.value
            const rePassword = e.target.rePassword.value

            if (password !== rePassword) return toast.error('Passwords doesn\'t match.')

            let registerRes = await userService.register(email, password, rePassword)
            if (registerRes) history.push('/user/login')

        } catch (err) { errorHandler(err) }
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