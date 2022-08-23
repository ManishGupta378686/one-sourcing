const employeeCalendarDbQueries = require('../dbQueries/employeeCalendarsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let employeeCalendars = await employeeCalendarDbQueries.findAll();
            return employeeCalendars
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return employeeCalendar
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let employeeCalendar = await employeeCalendarDbQueries.update(_id);
            return employeeCalendar
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let employeeCalendar = await employeeCalendarDbQueries.delete({ _id: req.params.id });
            return employeeCalendar
        } catch (e) {
            throw e
        } 
    },
};