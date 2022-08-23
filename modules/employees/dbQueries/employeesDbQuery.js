const employeeModel = require('../models/employeesModel');
const employeeQualificationModel = require('../models/employeesQualificationModel');
const employeeAddressModel = require('../models/employeesAddressModel');
const employeeExperienceModel = require('../models/employeesExperienceModel');
const shiftModel = require('../../shifts/models/shiftsModel');


module.exports = {
    allEmployeesBasicInfo: async (req) => {
        try {
            let employees = await employeeModel.findAll({
                attributes: { exclude: ['shift_id'] },
                include: [{ model: shiftModel, attributes: ["shift"] }]
            });
            return employees
        } catch (e) {
            throw e
        }
    },
    allEmployeesQualification: async (req) => {
        try {
            let employees = await employeeModel.findAll({
                attributes: ["id", "name"],
                include: [
                    { model: employeeQualificationModel },
                ],
            });
            return employees
        } catch (e) {
            throw e
        }
    },
    allEmployeesAddress: async (req) => {
        try {
            let employees = await employeeModel.findAll({
                attributes: ["id", "name"],
                include: [
                    { model: employeeAddressModel },
                ],
            });
            return employees
        } catch (e) {
            throw e
        }
    },
    allEmployeesExperience: async (req) => {
        try {
            let employees = await employeeModel.findAll({
                attributes: ["id", "name"],
                include: [
                    { model: employeeExperienceModel },
                ],
            });
            return employees
        } catch (e) {
            throw e
        }
    },
    employeesBasicInfo: async (req) => {
        try {
            let employees = await employeeModel.findAll({
                where: { id: req.params.id },
                attributes: { exclude: ['shift_id'] },
                include: [{ model: shiftModel, attributes: ["shift"] }]
            });
            return employees
        } catch (e) {
            throw e
        }
    },
    employeesQualification: async (req) => {
        try {
            let employees = await employeeModel.findAll({
                where: { id: req.params.id },
                attributes: ["id", "name"],
                include: [
                    { model: employeeQualificationModel },
                ],
            });
            return employees
        } catch (e) {
            throw e
        }
    },
    employeesAddress: async (req) => {
        try {
            let employees = await employeeModel.findAll({
                where: { id: req.params.id },
                attributes: ["id", "name"],
                include: [
                    { model: employeeAddressModel },
                ],
            });
            return employees
        } catch (e) {
            throw e
        }
    },
    employeesExperience: async (req) => {
        try {
            let employees = await employeeModel.findAll({
                where: { id: req.params.id },
                attributes: ["id", "name"],
                include: [
                    { model: employeeExperienceModel },
                ],
            });
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

    update: async (id) => {
        try {
            let employee = await employeeModel.findOne({ id: 0 }, { where: { id } });
            return employee
        } catch (e) {
            throw e
        }
    },

    delete: async (id) => {
        try {
            let employee = await employeeModel.destroy({ where: { id } });
            return employee
        } catch (e) {
            throw e
        }
    },
};