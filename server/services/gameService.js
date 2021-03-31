const Game = require('../Models/Game')

async function getAll(query) {
    let games = await Game.find({}).lean()

    if (query.search) {
        games = games.filter(x => x.title.toLowerCase().includes(query.search.toLowerCase()))
    }

    return games
}

async function getTopFive() {
    let games = await Game.find({}).lean()

    games = games.sort((a, b) => (b.follows - a.follows))
    games = games.slice(0, 5)

    return games
}

function create(data) {
    let game = new Game(data)
    return game.save()
}

async function getOne(id) {
    return await Game.findById(id).lean()
}

module.exports = {
    getAll,
    getTopFive,
    create,
    getOne
}