const Sequelize = require("sequelize");

module.exports = sequelize.define( "tags", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    postId: Sequelize.INTEGER(11),
    userId: Sequelize.INTEGER(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});
