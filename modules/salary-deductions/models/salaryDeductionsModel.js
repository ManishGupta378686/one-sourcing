
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const SalaryDeduction = sequelize.define('SalaryDeduction', {
    //
}, {
    timestamps: true
});

module.exports = SalaryDeduction