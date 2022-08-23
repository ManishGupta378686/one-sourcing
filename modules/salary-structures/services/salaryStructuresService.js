const salaryStructureDbQueries = require('../dbQueries/salaryStructuresDbQuery');


module.exports = {
    all: async (req) => {
        try {
            let salaryStructures = await salaryStructureDbQueries.findAll();
            return salaryStructures
        } catch (e) {
            throw e
        } 
    },

    create: async (req) => {
        try {
            return salaryStructure
        } catch (e) {
            throw e
        }
    },

    update: async (req) => {
        try {
            let _id = req.params.id;
            let {} = req.body;
            let salaryStructure = await salaryStructureDbQueries.update(_id);
            return salaryStructure
        } catch (e) {
            throw e
        } 
    },

    delete: async (req, res, next) => {
        try {
            let salaryStructure = await salaryStructureDbQueries.delete({ _id: req.params.id });
            return salaryStructure
        } catch (e) {
            throw e
        } 
    },
};