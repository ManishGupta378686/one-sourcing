const groupModel = require('../models/groupsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let groups = await groupModel.findAll();
            return groups
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return group
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let group = await groupModel.findOne({id:0}, {where: {id}});
            return group
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let group = await groupModel.destroy({ where: {id} });
            return group
        } catch (e) {
            throw e
        } 
    },
};