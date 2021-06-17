import { Route, Redirect } from 'react-router-dom'



const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {

            const token = localStorage.getItem('auth-token')
            const isAuth = Boolean(token)

            return isAuth ? <Component {...props} /> : <Redirect to="/user/login" />
        }} />
    )
}

export default ProtectedRoute