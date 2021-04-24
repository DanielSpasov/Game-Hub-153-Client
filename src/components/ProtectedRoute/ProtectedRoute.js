import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'

import UserContext from '../../contexts/UserContext'

const ProtectedRoute = ({ path, component: Component }) => {
    const { isAuth } = useContext(UserContext)
    return <Route exact path={path} render={() => isAuth ? <Component /> : <Redirect to="/user/login" />} />
}

export default ProtectedRoute