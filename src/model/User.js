const Sequelize = require("sequelize");

module.exports = sequelize.define( "users", {
    user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: Sequelize.STRING(50),
    password: Sequelize.STRING(50),
    display_name: Sequelize.STRING(50),
    imageId: Sequelize.STRING(11),
    birthday: Sequelize.DATE,
    tinh: Sequelize.STRING(40),
    xa: Sequelize.STRING(40),
    huyen: Sequelize.STRING(40),
    is_locked: Sequelize.TINYINT(4),
    school: Sequelize.STRING(40),
    favorite: Sequelize.STRING(100),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
});
