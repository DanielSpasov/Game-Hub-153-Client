const Game = require('../Models/Game')

function getAll() {
    return Game.find({}).lean()
}

async function getTopFive() {
    let games = await Game.find({}).lean()
    games = games.sort((a, b) => (b.upvotes - a.upvotes))
    games = games.slice(0, 5)

    return games
}

module.exports = {
    getAll,
    getTopFive,
}