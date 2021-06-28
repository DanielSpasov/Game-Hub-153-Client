import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import UserContext from '../../contexts/UserContext'



const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { userData } = useContext(UserContext)
    const isAuth = Boolean(userData.user)

    return <Route {...rest} render={() => isAuth ? <Component /> : <Redirect to="/user/login" />} />
}

export default ProtectedRoute