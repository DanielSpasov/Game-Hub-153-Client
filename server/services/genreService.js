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

    genres = genres.sort((a, b) => (b.follows - a.follows))
    genres = genres.slice(0, 5)

    return genres
}

function create(data) {
    let genre = new Genre(data)
    return genre.save()
}

module.exports = {
    getAll,
    getTopFive,
    create,
}