const Sequelize = require("sequelize");

module.exports = sequilize.define( "comments", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    postId: Sequelize.STRING(11),
    content: Sequelize.STRING(250),
    userId: Sequelize.STRING(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});
