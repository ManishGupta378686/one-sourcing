const attendanceModel = require('../models/attendancesModel');
const sequelize = require('../../../config/db.js');

module.exports = {
    findAll: async (req) => {
        try {
            let attendances = await attendanceModel.findAll();
            return attendances
        } catch (e) {
            throw e
        }
    },
    employeeAttendance: async (req) => {
        try {
            const {month, year}= req.query;
            let attendances = await attendanceModel.findAll({
                where: { employee_id: req.params.id, month:parseInt(month), year:parseInt(year) }
            });
            return attendances;
        } catch (e) {
            throw e
        }
    },
    create: async (req) => {
        try {
            return attendance
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let attendance = await attendanceModel.findOne({ id: 0 }, { where: { id } });
            return attendance
        } catch (e) {
            throw e
        }
    },

    delete: async (id) => {
        try {
            let attendance = await attendanceModel.destroy({ where: { id } });
            return attendance
        } catch (e) {
            throw e
        }
    },
};