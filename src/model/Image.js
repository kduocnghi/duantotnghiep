const Sequelize = require("sequelize");

module.exports = sequilize.define( "tweets", {
    image_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    location: Sequelize.STRING(250),
    album_id: Sequelize.STRING(11),
    user_id: Sequelize.STRING(11),
    hidden: Sequelize.STRING(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
});
