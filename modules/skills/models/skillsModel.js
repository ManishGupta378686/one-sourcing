const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const Skill = sequelize.define('Skill', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    skills: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Skill