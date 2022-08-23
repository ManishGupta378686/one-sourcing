const employeeDbQueries = require('../dbQueries/employeesDbQuery');


module.exports = {
    allEmployeesBasicInfo: async (req) => {
        try {
            let employees = await employeeDbQueries.allEmployeesBasicInfo(req);
            return employees
        } catch (e) {
            throw e
        }
    },
    allEmployeesQualification: async (req) => {
        try {
            let employees = await employeeDbQueries.allEmployeesQualification(req);
            return employees
        } catch (e) {
            throw e
        }
    },
    allEmployeesAddress: async (req) => {
        try {
            let employees = await employeeDbQueries.allEmployeesAddress(req);
            return employees
        } catch (e) {
            throw e
        }
    },
    allEmployeesExperience: async (req) => {
        try {
            let employees = await employeeDbQueries.allEmployeesExperience(req);
            return employees
        } catch (e) {
            throw e
        }
    },
    employeesBasicInfo: async (req) => {
        try {
            let employees = await employeeDbQueries.employeesBasicInfo(req);
            return employees
        } catch (e) {
            throw e
        }
    },
    employeesQualification: async (req) => {
        try {
            let employees = await employeeDbQueries.employeesQualification(req);
            return employees
        } catch (e) {
            throw e
        }
    },
    employeesAddress: async (req) => {
        try {
            let employees = await employeeDbQueries.employeesAddress(req);
            return employees
        } catch (e) {
            throw e
        }
    },
    employeesExperience: async (req) => {
        try {
            let employees = await employeeDbQueries.employeesExperience(req);
            return employees
        } catch (e) {
            throw e
        }
    },
    create: async (req) => {
        try {
            return employee
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let { } = req.body;
            let employee = await employeeDbQueries.update(_id);
            return employee
        } catch (e) {
            throw e
        }
    },

    delete: async (req, res, next) => {
        try {
            let employee = await employeeDbQueries.delete({ _id: req.params.id });
            return employee
        } catch (e) {
            throw e
        }
    },
};