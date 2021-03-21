const config = {
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://localhost/Game-Hub',
        SALT_ROUNDS: 10,
        AUTH_COOKIE: 'x-auth-token',
        SECRET: 'somesecretidk',
    },
    production: {}
}

module.exports = config[process.env.NODE_ENV.trim()]