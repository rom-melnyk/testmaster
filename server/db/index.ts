import Sequelize from 'sequelize';
const { database } = require('../config.json');

export const sequelize = new Sequelize(database.database, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

export const defaultModelOptions = {
  sequelize,
  underscored: true,
  timestamps: false,
};
