import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export default class Teams extends Model {
  id: number;
  teamName: string;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  underscored: true,
  timestamps: false,
});
