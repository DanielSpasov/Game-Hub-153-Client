const Dev = require('../Models/Dev')

function getAll() {
    return Dev.find({}).lean()
}

module.exports = {
    getAll,
}