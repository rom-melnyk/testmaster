const { database } = require('../creds');

const dbConfig = Object.assign({}, database, {
  // we unify migration and seeders in honor ha have only migrations
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'sequelize_meta',
  seederStorage: 'none',
});

module.exports = {
  development: dbConfig,
  production: dbConfig,
};
