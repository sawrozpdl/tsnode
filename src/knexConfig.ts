require('dotenv').config({path: __dirname + '/../.env'});

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    migrations: {
      tableName: "knex_migrations",
      directory: 'migrations'
    }
  },
  staging: {},
  production: {}
}
