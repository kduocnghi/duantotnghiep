const Sequelize = require("sequelize");

module.exports = sequilize.define( "likes", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    content: Sequelize.STRING(250),
    userId: Sequelize.STRING(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});
