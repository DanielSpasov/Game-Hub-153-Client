const Dev = require('../Models/Dev')

function getAll() {
    return Dev.find({}).lean()
}

async function getTopFive() {
    let devs = await Dev.find({}).lean()

    console.log(devs)

    return devs
}

module.exports = {
    getAll,
    getTopFive,
}