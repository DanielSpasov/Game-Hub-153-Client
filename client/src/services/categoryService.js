import config from '../config/index'

function getAll() {
    return fetch(`${config.DB_URI}/api/categories/getAll`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const functions = {
    getAll,
}

export default functions