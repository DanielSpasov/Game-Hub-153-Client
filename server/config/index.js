const config = {
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://localhost/Game-Hub'
    },
    production: {
        PORT: 80,
        DB_URI: 'mongodb://localhost/Game-Hub'
    }
}

module.exports = config[process.env.NODE_ENV.trim()]