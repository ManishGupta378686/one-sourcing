const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const Department = sequelize.define('Department', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    departmentName: {
        type: Sequelize.STRING,
    },
    departmentStrength: {
        type: Sequelize.INTEGER,
    },
}, {
    timestamps: true
});

module.exports = Department