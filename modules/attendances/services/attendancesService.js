const attendanceDbQueries = require('../dbQueries/attendancesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let attendances = await attendanceDbQueries.findAll();
            return attendances
        } catch (e) {
            throw e
        } 
    },

    employeeAttendance: async (req) => {
        try {
            let attendances = await attendanceDbQueries.employeeAttendance(req);
            return attendances
        } catch (e) {
            throw e
        }
    },

    takeAttendance: async (req) => {
        try {
            return attendance
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let attendance = await attendanceDbQueries.update(_id);
            return attendance
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let attendance = await attendanceDbQueries.delete({ _id: req.params.id });
            return attendance
        } catch (e) {
            throw e
        } 
    },
};