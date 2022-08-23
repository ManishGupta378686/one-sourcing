
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Feedback = sequelize.define('Feedback', {
    //
}, {
    timestamps: true
});

module.exports = Feedback