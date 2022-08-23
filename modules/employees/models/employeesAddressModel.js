const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const EmployeeAddress = sequelize.define('EmployeeAddress', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    addressType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    houseNo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    streetName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true
});

module.exports = EmployeeAddress