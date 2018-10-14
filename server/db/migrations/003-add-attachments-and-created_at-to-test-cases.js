'use strict';

const tableName = 'test_cases';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(tableName, 'attachments', {
        type: Sequelize.JSON,
        // defaultValue: '[]', // MySQL does not support default for JSON
      })
      .then(() => queryInterface.addColumn(tableName, 'created_at', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(tableName, 'created_at')
      .then(() => queryInterface.removeColumn(tableName, 'attachments'));
  },
};
