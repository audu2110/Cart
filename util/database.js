const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'AUDUMBAR', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
