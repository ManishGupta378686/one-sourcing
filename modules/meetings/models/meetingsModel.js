
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Meeting = sequelize.define('Meeting', {
    //
}, {
    timestamps: true
});

module.exports = Meeting