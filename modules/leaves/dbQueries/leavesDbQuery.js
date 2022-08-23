const leafModel = require('../models/leavesModel');


module.exports = {
    allEmployeesLeavesStatus: async (req) => {
        try {
            let leaves = await leafModel.findAll();
            return leaves
        } catch (e) {
            throw e
        } 
    }, 
    employeeLeaveStatus: async (req) => {
        try {
            let leaves = await leafModel.findAll({where:{employee_id:req.params.id}});
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

    update: async (id) => {
        try {
            let leaf = await leafModel.findOne({id:0}, {where: {id}});
            return leaf
        } catch (e) {
            throw e
        } 
    },

    delete: async (id) => {
        try {
            let leaf = await leafModel.destroy({ where: {id} });
            return leaf
        } catch (e) {
            throw e
        } 
    },
};