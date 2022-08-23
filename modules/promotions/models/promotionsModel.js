
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Promotion = sequelize.define('Promotion', {
    //
}, {
    timestamps: true
});

module.exports = Promotion