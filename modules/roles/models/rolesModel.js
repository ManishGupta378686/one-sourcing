const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const Role = sequelize.define('Role', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = Role