import config from '../config/index'

function getAll(search) {
    return fetch(`${config.DB_URI}/api/games/getAll?search=${search}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function getTopFive() {
    return fetch(`${config.DB_URI}/api/games/getTopFive`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const functions = {
    getAll,
    getTopFive,
}

export default functions