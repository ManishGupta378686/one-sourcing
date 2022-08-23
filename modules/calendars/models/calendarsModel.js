
    const Sequelize = require('sequelize');

const sequelize = require('../../../config/db');

const Calendar = sequelize.define('Calendar', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    event1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    event2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    event3: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = Calendar