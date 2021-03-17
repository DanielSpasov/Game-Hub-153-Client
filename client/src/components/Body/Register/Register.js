import './Register.css'

function Register() {
    return (
        <div className="register-section">

            <h1 className="register-section-title">Register</h1>

            <form action="/register">

                <label htmlFor="username" className="field-label">Username</label>
                <input className="register-field" type="text" name="username" id="username" />

                <label htmlFor="email" className="field-label">Email</label>
                <input className="register-field" type="text" name="email" id="email" />

                <label htmlFor="password" className="field-label">Password</label>
                <input className="register-field" type="password" name="password" id="password" />

                <label htmlFor="repeat-password" className="field-label">Repeat Password</label>
                <input className="register-field" type="password" name="repeat-password" id="repeat-password" />

            </form>

        </div>
    )
}

export default Register