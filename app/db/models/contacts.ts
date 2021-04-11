import sequelize from '../connection';
import { DataTypes, Model } from 'sequelize';

interface IContact extends Model {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;

  firstname: string;
  lastname: string;
  job: string;
}

const Contact = sequelize.define<IContact>(
  'contacts',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export {
  Contact,
  IContact,
};
