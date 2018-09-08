'use strict';

const tableName = 'test_cases';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING,
      description: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.sequelize.query('DROP TABLE test_cases;');
    return queryInterface.dropTable(tableName);
  },
};
