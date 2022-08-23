const groupChatModel = require('../models/groupChatsModel');
    const groupChatService = require('../services/groupChatsService');
const { error } = require("../../../middlewares/response");
const {
    RESPONSE_OK,
    RESPONSE_NOT_FOUND,
    RESPONSE_CREATED,
    RESPONSE_UPDATED,
    RESPONSE_DELETED,
} = require("../../../helpers/constants");

module.exports = {
    all: async (req, res, next) => {
        try {
            let groupChats = await groupChatService.all(req);
            if (groupChats.length) {
                res.code = RESPONSE_OK;
                res.message = "Group chats data fetched successfully";
                res.data = groupChats;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Group chats not found";
                res.data = groupChats;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    create: async (req, res, next) => {
        try {
            res.code = RESPONSE_CREATED;
            res.message = "Group chat saved successfully";
            res.data = await groupChatModel.create(req);
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let {} = req.body;
            let groupChat = await groupChatService.update(req);
            if (groupChat) {
                groupChat = await groupChat.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Group chat updated successfully";
                res.data = groupChat;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Group chat not found";
                res.data = groupChat;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let groupChat = await groupChatService.delete(req);
            if (groupChat) {
                res.code = RESPONSE_DELETED;
                res.message = "Group chat deleted successfully";
                res.data = groupChat;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Group chat not found";
                res.data = groupChat;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};