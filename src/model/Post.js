const Sequelize = require("sequelize");

module.exports = sequelize.define( "posts", {
    post_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: Sequelize.INTEGER(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});
