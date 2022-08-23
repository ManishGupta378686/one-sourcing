
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const EmployeeCalendar = sequelize.define('EmployeeCalendar', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    timestamps: true
});

module.exports = EmployeeCalendar