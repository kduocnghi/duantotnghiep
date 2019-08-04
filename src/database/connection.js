const Sequilize = require("sequelize");

const sequelize = new Sequilize("seque", 'root','', { host: '127.0.0.1', dialect: "mysql"});

module.exports = sequelize;
global.sequilize = sequelize;
