const meetingDbQueries = require('../dbQueries/meetingsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let meetings = await meetingDbQueries.findAll();
            return meetings
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return meeting
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let meeting = await meetingDbQueries.update(_id);
            return meeting
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let meeting = await meetingDbQueries.delete({ _id: req.params.id });
            return meeting
        } catch (e) {
            throw e
        } 
    },
};