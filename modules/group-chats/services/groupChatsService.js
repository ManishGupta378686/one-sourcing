const groupChatDbQueries = require('../dbQueries/groupChatsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let groupChats = await groupChatDbQueries.findAll();
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

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let groupChat = await groupChatDbQueries.update(_id);
            return groupChat
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let groupChat = await groupChatDbQueries.delete({ _id: req.params.id });
            return groupChat
        } catch (e) {
            throw e
        } 
    },
};