const Genre = require('../Models/Genre')

async function getAll(query) {
    let genres = await Genre.find({}).lean()

    if(query.search) {
        genres = genres.filter(x => x.name.toLowerCase().includes(query.search.toLowerCase()))
    }

    return genres
}

async function getTopFive() {
    let genres = await Genre.find({}).lean()

    genres = genres.sort((a, b) => (b.upvotes - a.upvotes))
    genres = genres.slice(0, 5)

    return genres
}

module.exports = {
    getAll,
    getTopFive,
}