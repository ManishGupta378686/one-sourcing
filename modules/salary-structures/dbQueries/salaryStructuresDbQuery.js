const salaryStructureModel = require('../models/salaryStructuresModel');


module.exports = {
    findAll: async (req) => {
        try {
            let salaryStructures = await salaryStructureModel.findAll();
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

    update: async (id) => {
        try {
            let salaryStructure = await salaryStructureModel.findOne({id:0}, {where: {id}});
            return salaryStructure
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let salaryStructure = await salaryStructureModel.destroy({ where: {id} });
            return salaryStructure
        } catch (e) {
            throw e
        } 
    },
};