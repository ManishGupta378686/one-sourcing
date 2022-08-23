const feedbackDbQueries = require('../dbQueries/feedbacksDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let feedbacks = await feedbackDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let feedback = await feedbackDbQueries.update(_id);
            return feedback
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let feedback = await feedbackDbQueries.delete({ _id: req.params.id });
            return feedback
        } catch (e) {
            throw e
        } 
    },
};