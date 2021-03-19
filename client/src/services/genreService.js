import config from '../config/index'

function getAll(search) {
    return fetch(`${config.DB_URI}/api/genre/getAll?search=${search}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function getTopFive() {
    return fetch(`${config.DB_URI}/api/genre/getTopFive`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const functions = {
    getAll,
    getTopFive,
}

export default functions