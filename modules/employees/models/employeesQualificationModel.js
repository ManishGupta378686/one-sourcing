const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const EmployeeQualification = sequelize.define('EmployeeQualification', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    graduation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    collegeOfGraduation: {
        type: Sequelize.STRING,
    },
    passingYearOfGraduation: {
        type: Sequelize.STRING,
    },
    postGraduation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    collegeOfPostGraduation: {
        type: Sequelize.STRING,
    },
    passingYearOfPostGraduation: {
        type: Sequelize.STRING,
    },
    anyCertificationCourse: {
        type: Sequelize.STRING,
    },
}, {
    timestamps: true
});

module.exports = EmployeeQualification;