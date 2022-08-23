const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const EmployeeExperience = sequelize.define('EmployeeExperience', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    previousJobTitle: {
        type: Sequelize.STRING,
    },
    previousJobDesignation: {
        type: Sequelize.STRING,
    },
    previousOrganization: {
        type: Sequelize.STRING,
    },
    joiningDate: {
        type: Sequelize.DATEONLY,
    },
    leavingDate: {
        type: Sequelize.DATEONLY,
    },
    reasonToLeft: {
        type: Sequelize.TEXT,
    },
}, {
    timestamps: true
});

module.exports = EmployeeExperience