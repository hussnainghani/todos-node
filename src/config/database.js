const Sequelize = require('sequelize');

const { PG_HOST, PG_USER, PG_PASSWORD, PG_DB } = process.env;
const sequelize = new Sequelize(PG_DB, PG_USER, PG_PASSWORD, {
  host: PG_HOST,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;

