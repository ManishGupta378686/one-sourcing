const meetingModel = require('../models/meetingsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let meetings = await meetingModel.findAll();
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

    update: async (id) => {
        try {
            let meeting = await meetingModel.findOne({id:0}, {where: {id}});
            return meeting
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let meeting = await meetingModel.destroy({ where: {id} });
            return meeting
        } catch (e) {
            throw e
        } 
    },
};