import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'

import UserContext from '../../contexts/UserContext'

const ProtectedRoute = ({ exact, path, component: Component }) => {

    const { isAuth } = useContext(UserContext)
    let protectedRoute = <p>g</p>
    
    if (exact) {
        protectedRoute = <Route exact path={path} render={() => isAuth ? <Component /> : <Redirect to="/user/login" />} />
    } else {
        protectedRoute = <Route path={path} render={() => isAuth ? <Component /> : <Redirect to="/user/login" />} />
    }
    
    return protectedRoute
}

export default ProtectedRoute