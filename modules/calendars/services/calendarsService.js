const calendarDbQueries = require('../dbQueries/calendarsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let calendars = await calendarDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let calendar = await calendarDbQueries.update(_id);
            return calendar
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let calendar = await calendarDbQueries.delete({ _id: req.params.id });
            return calendar
        } catch (e) {
            throw e
        } 
    },
};