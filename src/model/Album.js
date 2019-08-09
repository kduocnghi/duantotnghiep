const Sequelize = require("sequelize");

module.exports = sequilize.define( "albums", {
    album_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: Sequelize.INTEGER(11),
    name: Sequelize.STRING(50),
    hidden: Sequelize.TINYINT(4),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});
