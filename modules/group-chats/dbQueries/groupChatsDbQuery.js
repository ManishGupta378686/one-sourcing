const groupChatModel = require('../models/groupChatsModel');


module.exports = {
    findAll: async (req) => {
        try {
            let groupChats = await groupChatModel.findAll();
            return groupChats
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return groupChat
        } catch (e) {
            throw e
        }
    },

    update: async (id) => {
        try {
            let groupChat = await groupChatModel.findOne({id:0}, {where: {id}});
            return groupChat
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let groupChat = await groupChatModel.destroy({ where: {id} });
            return groupChat
        } catch (e) {
            throw e
        } 
    },
};