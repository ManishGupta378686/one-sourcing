
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Project = sequelize.define('Project', {
    //
}, {
    timestamps: true
});

module.exports = Project