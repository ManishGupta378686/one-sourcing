
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Salary = sequelize.define('Salary', {
    //
}, {
    timestamps: true
});

module.exports = Salary