const employeeCalendarModel = require('../models/employeeCalendarsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let employeeCalendars = await employeeCalendarModel.findAll();
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

    update: async (id) => {
        try {
            let employeeCalendar = await employeeCalendarModel.findOne({id:0}, {where: {id}});
            return employeeCalendar
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let employeeCalendar = await employeeCalendarModel.destroy({ where: {id} });
            return employeeCalendar
        } catch (e) {
            throw e
        } 
    },
};