const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const EmployeeRole = sequelize.define('EmployeeRole', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    timestamps: true
});

module.exports = EmployeeRole