const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const Leaf = sequelize.define('Leaf', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    totalPaidCL: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    totalPaidSL: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    totalUsedCL: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    totalUsedSL: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    remainingCL: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    remainingSL: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = Leaf