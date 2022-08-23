
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Bonus = sequelize.define('Bonus', {
    //
}, {
    timestamps: true
});

module.exports = Bonus