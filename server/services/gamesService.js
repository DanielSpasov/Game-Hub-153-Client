const Game = require('../Models/Game')

function getAll() {
    return Game.find({}).lean()
}

module.exports = {
    getAll,
}