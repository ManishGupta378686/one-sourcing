const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const Language = sequelize.define('Language', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    language:{
        type:Sequelize.STRING
    }
}, {
    timestamps: true
});

module.exports = Language