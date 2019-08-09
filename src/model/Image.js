const Sequelize = require("sequelize");

module.exports = sequilize.define( "images", {
    image_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    location: Sequelize.STRING(250),
    albumId: Sequelize.INTEGER(11),
    userId: Sequelize.INTEGER(11),
    hidden: Sequelize.TINYINT(4),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
});
