// Update with your config settings.
const { DB_URL } = require('./env')

module.exports = {
  development: {
    client: 'pg',
    connection: DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}
