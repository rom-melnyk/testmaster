import Sequelize from 'sequelize';
import { sequelize, defaultModelOptions } from '../index';

export const TestCase: Sequelize.Model = sequelize.define('test_cases',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    attachments: {
      type: Sequelize.JSON,
      // defaultValue: [], // MySQL does not support default for JSON
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.fn('NOW'),
      field: 'created_at',
    },
  },
  defaultModelOptions
);
