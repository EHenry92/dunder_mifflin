const Sequelize = require('sequelize');
const db = require('../db');
const Purchase = db.define('purchase', {
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.DECIMAL(10, 2)
  }
  }
)

module.exports = Purchase;
