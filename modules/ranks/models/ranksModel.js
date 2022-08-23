
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Rank = sequelize.define('Rank', {
    //
}, {
    timestamps: true
});

module.exports = Rank