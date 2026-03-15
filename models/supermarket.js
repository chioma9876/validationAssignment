const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../databse/database');
const User = require('./user');

class Supermarket extends Model {}

Supermarket.init(
  {
    // Model attributes are defined here
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      userID: {
        type: DataTypes.UUID,
        allowNull: false
      },
      shopName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      shopAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      shopEmail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      shopNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Supermarket', // We need to choose the model name
  },
 );

 User.hasMany(Supermarket, {
   foreignKey: 'userID',
   as: 'supermarket'
 })

 Supermarket.belongsTo(User, {
  foreignKey: 'userID',
  as: 'user'
 })

module.exports = Supermarket