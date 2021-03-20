const Dev = require('../Models/Dev')

async function getAll(query) {
    let devs = await Dev.find({}).lean()
    
    if(query.search) {
        devs = devs.filter(x => x.orgName.toLowerCase().includes(query.search.toLowerCase()))
    }

    return devs
}

async function getTopFive() {
    let devs = await Dev.find({}).lean()

    devs = devs.sort((a, b) => (b.upvotes - a.upvotes))
    devs = devs.slice(0, 5)

    return devs
}

function create(data) {
    let dev = new Dev(data)
    return dev.save()
}

module.exports = {
    getAll,
    getTopFive,
    create,
}