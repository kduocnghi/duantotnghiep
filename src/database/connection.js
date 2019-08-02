const Sequilize = require("sequelize");

const sequelize = new Sequilize("seque", 'root', { host: '127.0.0.1', dialect: "mysql", operatorsAliases: false});

module.exports = sequelize;
global.sequilize = sequelize;
