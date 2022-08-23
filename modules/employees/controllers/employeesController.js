const employeeModel = require('../models/employeesModel');
const employeeAddress = require('../models/employeesAddressModel');
const employeeQualification = require('../models/employeesQualificationModel');
const employeeExperience = require('../models/employeesExperienceModel');
const employeeService = require('../services/employeesService');
const leaveModel = require('../../leaves/models/leavesModel');
const languageModel = require('../../languages/models/languagesModel');
const employeeLanguagesModel = require('../../employee-languages/models/employeeLanguagesModel');
const { error } = require("../../../middlewares/response");
const {
    RESPONSE_OK,
    RESPONSE_NOT_FOUND,
    RESPONSE_CREATED,
    RESPONSE_UPDATED,
    RESPONSE_DELETED,
} = require("../../../helpers/constants");

module.exports = {
    allEmployeesBasicInfo: async (req, res, next) => {
        try {
            let employees = await employeeService.allEmployeesBasicInfo(req);
            if (employees.length) {
                res.code = RESPONSE_OK;
                res.message = "Employees data fetched successfully";
                res.data = employees;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employees not found";
                res.data = employees;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    allEmployeesQualification: async (req, res, next) => {
        try {
            let employees = await employeeService.allEmployeesQualification(req);
            if (employees.length) {
                res.code = RESPONSE_OK;
                res.message = "Employees data fetched successfully";
                res.data = employees;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employees not found";
                res.data = employees;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    allEmployeesAddress: async (req, res, next) => {
        try {
            let employees = await employeeService.allEmployeesAddress(req);
            if (employees.length) {
                res.code = RESPONSE_OK;
                res.message = "Employees data fetched successfully";
                res.data = employees;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employees not found";
                res.data = employees;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    }, 
    allEmployeesExperience: async (req, res, next) => {
        try {
            let employees = await employeeService.allEmployeesExperience(req);
            if (employees.length) {
                res.code = RESPONSE_OK;
                res.message = "Employees data fetched successfully";
                res.data = employees;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employees not found";
                res.data = employees;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    employeesBasicInfo: async (req, res, next) => {
        try {
            let employees = await employeeService.employeesBasicInfo(req);
            if (employees.length) {
                res.code = RESPONSE_OK;
                res.message = "Employees data fetched successfully";
                res.data = employees;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employees not found";
                res.data = employees;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    employeesQualification: async (req, res, next) => {
        try {
            let employees = await employeeService.employeesQualification(req);
            if (employees.length) {
                res.code = RESPONSE_OK;
                res.message = "Employees data fetched successfully";
                res.data = employees;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employees not found";
                res.data = employees;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    employeesAddress: async (req, res, next) => {
        try {
            let employees = await employeeService.employeesAddress(req);
            if (employees.length) {
                res.code = RESPONSE_OK;
                res.message = "Employees data fetched successfully";
                res.data = employees;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employees not found";
                res.data = employees;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    }, 
    employeesExperience: async (req, res, next) => {
        try {
            let employees = await employeeService.employeesExperience(req);
            if (employees.length) {
                res.code = RESPONSE_OK;
                res.message = "Employees data fetched successfully";
                res.data = employees;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employees not found";
                res.data = employees;
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
            res.message = "Employee saved successfully";
            const {
                name,
                fatherName,
                motherName,
                dob,
                contactNo,
                email,
                languages,
                shift,
                graduation,
                collegeOfGraduation,
                passingYearOfGraduation,
                postGraduation,
                collegeOfPostGraduation,
                passingYearOfPostGraduation,
                anyCertificationCourse,
                lHouseNo,
                lStreetName,
                lCity,
                lState,
                lZipCode,
                pHouseNo,
                pStreetName,
                pCity,
                pState,
                pZipCode,
                previousJobTitle,
                previousJobDesignation,
                previousOrganization,
                joiningDate,
                leavingDate,
                reasonToLeft } = req.body;
            let dob_date = new Date(dob);
            let join_date = new Date(joiningDate);
            let leave_date = new Date(leavingDate);
            res.data1 = await employeeModel.create({
                name,
                fatherName,
                motherName,
                dob: dob_date,
                contactNo,
                email,
                shift_id
            });
            res.data2 = await employeeAddress.create({
                employee_id: res.data1.dataValues.id,
                addressType: "Local",
                houseNo: lHouseNo,
                streetName: lStreetName,
                city: lCity,
                state: lState,
                zipCode: lZipCode
            });
            res.data3 = await employeeAddress.create({
                employee_id: res.data1.dataValues.id,
                addressType: "Parmanent",
                houseNo: pHouseNo,
                streetName: pStreetName,
                city: pCity,
                state: pState,
                zipCode: pZipCode
            });
            res.data4 = await employeeQualification.create({
                employee_id: res.data1.dataValues.id,
                graduation,
                collegeOfGraduation,
                passingYearOfGraduation,
                postGraduation,
                collegeOfPostGraduation,
                passingYearOfPostGraduation,
                anyCertificationCourse
            });
            res.data5 = await employeeExperience.create({
                employee_id: res.data1.dataValues.id,
                previousJobTitle,
                previousJobDesignation,
                previousOrganization,
                joiningDate:join_date,
                leavingDate:leave_date,
                reasonToLeft
            });
            res.data6 = await leaveModel.create({
                employee_id: res.data1.dataValues.id,
                totalPaidCL:12,
                totalPaidSL:6,
                totalUsedCL:0,
                totalUsedSL:0,
                remainingCL:12,
                remainingSL:6
            })
            for(let item of languages){
                let result = await languageModel.findOne({where:{language:item}})
                await employeeLanguagesModel.create({ employee_id: res.data1.dataValues.id , language_id:result.dataValues.id});
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    update: async (req, res, next) => {
        try {
            let { } = req.body;
            let employee = await employeeService.update(req);
            if (employee) {
                employee = await employee.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Employee updated successfully";
                res.data = employee;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee not found";
                res.data = employee;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let employee = await employeeService.delete(req);
            if (employee) {
                res.code = RESPONSE_DELETED;
                res.message = "Employee deleted successfully";
                res.data = employee;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Employee not found";
                res.data = employee;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};