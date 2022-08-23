
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Task = sequelize.define('Task', {
    //
}, {
    timestamps: true
});

module.exports = Task