import axios from 'axios'

import errorHandler from '../utils/errorHandler'

const db_uri = process.env.REACT_APP_DB_URI



const checkLoggedIn = async (setUserData) => {

    try {
        let token = localStorage.getItem('auth-token')
        if (token === null) {
            localStorage.setItem('-authtoken', '')
            token = ''
        }
    
        const tokenResponse = await axios.post(`${db_uri}/user/tokenIsValid`, null, {
            headers: { 'x-auth-token': token }
        })
    
        if (tokenResponse.data) {
            const userResponse = await axios.get(`${db_uri}/user/`, {
                headers: { 'x-auth-token': token }
            })
            setUserData({ token, user: userResponse.data })
        }
    } catch (err) { errorHandler(err) }
}

const login = async (email, password, setUserData) => {

    try {
        let loginRes = await axios.post(`${db_uri}/user/login`, { email, password })
        setUserData({ token: loginRes.data.token, user: loginRes.data.user })
        localStorage.setItem('auth-token', loginRes.data.token)
        return loginRes
    } catch (err) { errorHandler(err) }
}

const register = async (email, password, rePassword) => {
    try {
        let registerRes = await axios.post(`${db_uri}/user/register`, { email, password, rePassword })
        return registerRes
    } catch (err) { errorHandler(err) }
}



const functions = {
    checkLoggedIn,
    login,
    register,
}

export default functions