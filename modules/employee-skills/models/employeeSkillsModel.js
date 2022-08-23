
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const EmployeeSkill = sequelize.define('EmployeeSkill', {
    //
}, {
    timestamps: true
});

module.exports = EmployeeSkill