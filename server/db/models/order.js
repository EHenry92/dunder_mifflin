const Sequelize = require('sequelize');
const db = require('../db');
const Purchase = require('./purchase');

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  subTotal: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
  }, {
    defaultScope: {
      include: [{all: true, nested: true}]
    }
  }
)

module.exports = Order;

Order.prototype.updateStatus = function (newStatus) {
  return this.update({status: newStatus})
  .then(order => order)
  .catch(err => err)
}
