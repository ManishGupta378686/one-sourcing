const feedbackModel = require('../models/feedbacksModel');


module.exports = {
    findAll: async (req) => {
        try {
            let feedbacks = await feedbackModel.findAll();
            return feedbacks
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return feedback
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let feedback = await feedbackModel.findOne({id:0}, {where: {id}});
            return feedback
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let feedback = await feedbackModel.destroy({ where: {id} });
            return feedback
        } catch (e) {
            throw e
        } 
    },
};