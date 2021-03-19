const Game = require('../Models/Game')

async function getAll(query) {
    let games = await Game.find({}).lean()
    
    if(query.search) {
        games = games.filter(x => x.title.toLowerCase().includes(query.search.toLowerCase()))
    }

    return games
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