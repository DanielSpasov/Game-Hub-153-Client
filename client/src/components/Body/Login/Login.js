import './Login.css'

function Login() {
    return (
        <div className="login-section">

            <h1 className="login-section-title">Login</h1>

            <form action="/login">
                <label htmlFor="username" className="field-label">Username</label><br></br>
                <input className="login-field" type="text" name="username" id="username" /><br></br>
                <label htmlFor="password" className="field-label">Password</label><br></br>
                <input className="login-field" type="password" name="password" id="password" />
            </form>

        </div>
    )
}

export default Login