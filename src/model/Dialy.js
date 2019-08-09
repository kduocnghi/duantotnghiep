const Sequelize = require("sequelize");

module.exports = sequilize.define( "dialys", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    imageId: Sequelize.STRING(11),
    userId: Sequelize.STRING(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});
