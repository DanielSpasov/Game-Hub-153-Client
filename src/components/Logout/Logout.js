import { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import UserContext from '../../contexts/UserContext'



const Logout = () => {
    const { setUserData } = useContext(UserContext)
    useEffect(() => setUserData({}), [setUserData])
    localStorage.setItem('auth-token', '')
    return <Redirect to="/" />
}



export default Logout