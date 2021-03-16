const Dev = require('../Models/Dev')

function getAll() {
    return Dev.find({}).lean()
}

async function getTopFive() {
    let devs = await Dev.find({}).lean()

    devs = devs.sort((a, b) => (b.upvotes - a.upvotes))
    devs = devs.slice(0, 5)

    return devs
}

module.exports = {
    getAll,
    getTopFive,
}