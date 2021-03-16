const Genre = require('../Models/Genre')

function getAll() {
    return Genre.find({}).lean()
}

async function getTopFive() {
    let genres = await Genre.find({}).lean()

    genres = genres.sort((a, b) => (b.numberOfPlayers - a.numberOfPlayers))
    genres = genres.slice(0, 5)

    return genres
}

module.exports = {
    getAll,
    getTopFive,
}