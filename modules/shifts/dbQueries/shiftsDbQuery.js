const shiftModel = require('../models/shiftsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let shifts = await shiftModel.findAll();
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

    update: async (id) => {
        try {
            let shift = await shiftModel.findOne({id:0}, {where: {id}});
            return shift
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let shift = await shiftModel.destroy({ where: {id} });
            return shift
        } catch (e) {
            throw e
        } 
    },
};