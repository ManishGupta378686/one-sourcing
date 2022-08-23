const shiftDbQueries = require('../dbQueries/shiftsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let shifts = await shiftDbQueries.findAll();
            return shifts
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return shift
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let shift = await shiftDbQueries.update(_id);
            return shift
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let shift = await shiftDbQueries.delete({ _id: req.params.id });
            return shift
        } catch (e) {
            throw e
        } 
    },
};