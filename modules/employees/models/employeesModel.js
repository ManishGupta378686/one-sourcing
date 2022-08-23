const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const Employee = sequelize.define('Employee', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    fatherName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    motherName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    contactNo: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
}, {
    timestamps: true
});

module.exports = Employee