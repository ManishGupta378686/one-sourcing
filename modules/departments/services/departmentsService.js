const departmentDbQueries = require('../dbQueries/departmentsDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let departments = await departmentDbQueries.findAll();
            return departments
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return department
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let department = await departmentDbQueries.update(_id);
            return department
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let department = await departmentDbQueries.delete({ _id: req.params.id });
            return department
        } catch (e) {
            throw e
        } 
    },
};