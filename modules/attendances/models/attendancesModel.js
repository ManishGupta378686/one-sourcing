const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const Attendance = sequelize.define('Attendance', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    month: {
        type: Sequelize.INTEGER,
    }, 
    year: {
        type: Sequelize.INTEGER,
    },
    day: {
        type: Sequelize.INTEGER,
    },
    status: {
        type: Sequelize.STRING,
    }
}, {
    timestamps: false
});

module.exports = Attendance