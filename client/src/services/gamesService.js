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

function addGame(data) {
    return fetch(`${config.DB_URI}/api/games/addGame`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const functions = {
    getAll,
    getTopFive,
    addGame,
}

export default functions