const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/index')

function createToken(data) {
    return jwt.sign(data, SECRET)
}

// function verifyToken(token) {
//     return new Promise((resolve, reject) => {
//         jwt.verify(token, SECRET, (err, data) => {
//             if (err) { reject(err); return }
//             resolve(data)
//         })
//     })
// }

module.exports = {
    createToken,
    // verifyToken
}