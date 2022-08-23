const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const EmployeeLanguage = sequelize.define('EmployeeLanguage', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    timestamps: true
});

module.exports = EmployeeLanguage