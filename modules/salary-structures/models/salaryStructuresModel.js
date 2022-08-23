
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const SalaryStructure = sequelize.define('SalaryStructure', {
    //
}, {
    timestamps: true
});

module.exports = SalaryStructure