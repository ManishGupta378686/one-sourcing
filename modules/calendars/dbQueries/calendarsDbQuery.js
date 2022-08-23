const calendarModel = require('../models/calendarsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let calendars = await calendarModel.findAll();
            return calendars
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return calendar
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let calendar = await calendarModel.findOne({id:0}, {where: {id}});
            return calendar
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let calendar = await calendarModel.destroy({ where: {id} });
            return calendar
        } catch (e) {
            throw e
        } 
    },
};