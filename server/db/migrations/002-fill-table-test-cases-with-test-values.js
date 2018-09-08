'use strict';

const tableName = 'test_cases';
const data = [
  { title: 'A pretty bug', description: 'Some pretty descr' },
  { title: 'Another pretty bug', description: 'Another pretty descr' },
  { title: 'An ugly bug', description: 'Some ugly descr' },
  { title: 'A nice bug', description: 'Some nide descr' },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, data);
  },
};
