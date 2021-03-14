import config from '../config/index'

function getAll() {
    return fetch(`${config.DB_URI}/categories`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export default {
    getAll,
}