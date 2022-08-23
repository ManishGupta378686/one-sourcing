
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Notification = sequelize.define('Notification', {
    //
}, {
    timestamps: true
});

module.exports = Notification