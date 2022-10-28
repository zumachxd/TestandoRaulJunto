import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

export default class Users extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;
}

Users.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING(100),
      allowNull: false,
    },
    role: {
      type: STRING(100),
      allowNull: false,
    },
    email: {
      type: STRING(100),
      allowNull: false,
    },
    password: {
      type: STRING(100),
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  },
);
