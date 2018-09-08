import Sequelize from 'sequelize';
import { sequelize, defaultModelOptions } from '../index';

export const TestCase = sequelize.define('test_cases', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,

  },
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
  },
  defaultModelOptions
);
