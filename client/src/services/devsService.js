import config from '../config/index'

function getAll(search) {
    return fetch(`${config.DB_URI}/api/devs/getAll?search=${search}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function getTopFive() {
    return fetch(`${config.DB_URI}/api/devs/getTopFive`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function addDev(data) {
    return fetch(`${config.DB_URI}/api/devs/addDev`, {
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
    addDev,
}

export default functions