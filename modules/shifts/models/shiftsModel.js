const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const Shift = sequelize.define('Shift', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    shift: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Shift