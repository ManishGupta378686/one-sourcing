const employeeRoleDbQueries = require('../dbQueries/employeeRolesDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let employeeRoles = await employeeRoleDbQueries.findAll();
            return employeeRoles
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return employeeRole
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let employeeRole = await employeeRoleDbQueries.update(_id);
            return employeeRole
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let employeeRole = await employeeRoleDbQueries.delete({ _id: req.params.id });
            return employeeRole
        } catch (e) {
            throw e
        } 
    },
};