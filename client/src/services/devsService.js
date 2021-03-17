import config from '../config/index'

function getAll() {
    return fetch(`${config.DB_URI}/api/devs/getAll`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function getTopFive() {
    return fetch(`${config.DB_URI}/api/devs/getTopFive`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const functions = {
    getAll,
    getTopFive,
}

export default functions