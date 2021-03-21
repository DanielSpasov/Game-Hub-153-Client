import config from '../config/index'

function register(username, password) {
    return fetch(`${config.DB_URI}/api/user/register`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-type': 'application/json'
        }
    })
}

function login(username, password) {
    return fetch(`${config.DB_URI}/api/user/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(data => data.json())
}

const functions = {
    register,
    login,
}

export default functions