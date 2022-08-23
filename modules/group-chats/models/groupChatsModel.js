
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const GroupChat = sequelize.define('GroupChat', {
    //
}, {
    timestamps: true
});

module.exports = GroupChat