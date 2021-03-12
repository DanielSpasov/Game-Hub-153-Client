const Category = require('../Models/Category')

function getAll() {
    return Category.find({}).lean()
}

module.exports = {
    getAll,
}