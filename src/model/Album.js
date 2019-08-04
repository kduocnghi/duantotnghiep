const Sequelize = require("sequelize");

module.exports = sequilize.define( "tweets", {
    album_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.STRING(250),
    name: Sequelize.STRING(11),
    hidden: Sequelize.STRING(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});
