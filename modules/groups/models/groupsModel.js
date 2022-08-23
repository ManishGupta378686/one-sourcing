
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Group = sequelize.define('Group', {
    //
}, {
    timestamps: true
});

module.exports = Group