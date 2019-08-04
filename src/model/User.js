const Sequelize = require("sequelize");

module.exports = sequilize.define( "users", {
    user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: Sequelize.STRING(250),
    password: Sequelize.STRING(250),
    display_name: Sequelize.STRING(11),
    imageId: Sequelize.STRING(11),
    birthday: Sequelize.STRING(11),
    tinh: Sequelize.STRING(11),
    xa: Sequelize.STRING(11),
    huyen: Sequelize.STRING(11),
    is_locked: Sequelize.STRING(11),
    school: Sequelize.STRING(11),
    favorite: Sequelize.STRING(11),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    deletedAt: Sequelize.DATE
});
