// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model//
Product.init(
  {
    id: {
       //defining a new model using Sequelize.define//
      type: DataTypes.INTEGER,
      //Set as primary key//
      primaryKey: true,
      //Uses auto increment//
      autoIncrement: true,
      //Doesn't allow null values//
      allowNull: false
    },
    product_name: {
       //defining a new model using Sequelize.define//
      type: DataTypes.STRING,
      //Doesn't allow null values//
      allowNull: false
    },
    price: {
       //defining a new model using Sequelize.define//
      type: DataTypes.DECIMAL,
      //Doesn't allow null values//
      allowNull: false,
      //Validates that the value is a decimal//
      validate: {
        isDecimal: true
      }
    },
    stock: {
       //defining a new model using Sequelize.define//
      type: DataTypes.INTEGER,
      //Doesn't allow null values//
      allowNull: false,
      //Set a default value of 10//
      defaultValue: 10,
      //Validates that the value is numeric//
      validate: {
        isNumeric: true
      }
    },
    category_id: {
       //defining a new model using Sequelize.define//
      type: DataTypes.INTEGER,
      allowNull: true,
      //References the category model's id//
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
