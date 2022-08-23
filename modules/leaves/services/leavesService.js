const leafDbQueries = require('../dbQueries/leavesDbQuery');


module.exports = {
    allEmployeesLeavesStatus: async (req) => {
        try {
            let leaves = await leafDbQueries.allEmployeesLeavesStatus();
            return leaves
        } catch (e) {
            throw e
        } 
    },
    employeeLeaveStatus: async (req) => {
        try {
            let leaves = await leafDbQueries.employeeLeaveStatus(req);
            return leaves
        } catch (e) {
            throw e
        }
    },

    create: async (req) => {
        try {
            return leaf
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let leaf = await leafDbQueries.update(_id);
            return leaf
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let leaf = await leafDbQueries.delete({ _id: req.params.id });
            return leaf
        } catch (e) {
            throw e
        } 
    },
};