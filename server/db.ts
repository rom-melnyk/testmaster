import Sequelize from 'sequelize';
const { database } = require('./creds');

export const sequelize = new Sequelize(database.database, database.user, database.password, {
  host: database.host,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
