import config from '../config/index'

function getAll() {
    return fetch(`${config.DB_URI}/api/devs`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export default {
    getAll,
}