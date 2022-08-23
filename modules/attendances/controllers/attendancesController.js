const attendanceModel = require('../models/attendancesModel');
// const employeeModel = require('../../../modules/employees/models/employeesModel');
const leaveModel = require('../../leaves/models/leavesModel');
const attendanceService = require('../services/attendancesService');
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
            let attendances = await attendanceService.all(req);
            if (attendances.length) {
                res.code = RESPONSE_OK;
                res.message = "Attendances data fetched successfully";
                res.data = attendances;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Attendances not found";
                res.data = attendances;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    employeeAttendance: async (req, res, next) => {
        try {
            let attendances = await attendanceService.employeeAttendance(req);
            if (attendances.length) {
                res.code = RESPONSE_OK;
                res.message = "Attendances data fetched successfully";
                res.data = attendances;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Attendances not found";
                res.data = attendances;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
    takeAttendance: async (req, res, next) => {
        try {
            res.code = RESPONSE_CREATED;
            res.message = "Attendance saved successfully";
            const { date, employees } = req.body;
            const date1 = new Date(date);
            for (let emply of employees) {
                res.data = await attendanceModel.create({ employee_id: emply.employee_id, day: date1.getDay(),month:date1.getMonth()+1,year:date1.getFullYear(), status: emply.status });
                if (emply.status === "cl" || emply.status === "Cl" || emply.status === "CL") {
                    let result = await leaveModel.findAll({ attributes: ['totalUsedCL', 'totalUsedSL', 'remainingCL', 'remainingSL'], where: { employee_id: emply.employee_id } });
                    let obj = result[0].dataValues;
                    obj.totalUsedCL++;
                    obj.remainingCL--;
                    await leaveModel.update(obj, { where: { employee_id: emply.employee_id } })
                }
                if (emply.status === "sl" || emply.status === "Sl" || emply.status === "SL") {
                    let result = await leaveModel.findAll({ attributes: ['totalPaidCL', 'totalPaidSL', 'totalUsedCL', 'totalUsedSL', 'remainingCL', 'remainingSL', 'employee_id'], where: { employee_id: emply.employee_id } });
                    let obj = result[0].dataValues;
                    obj.totalUsedSL++;
                    obj.remainingSL--;
                    await leaveModel.update(obj, { where: { employee_id: emply.employee_id } })
                }
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
            let attendance = await attendanceService.update(req);
            if (attendance) {
                attendance = await attendance.save();
                res.code = RESPONSE_UPDATED;
                res.message = "Attendance updated successfully";
                res.data = attendance;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Attendance not found";
                res.data = attendance;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },

    delete: async (req, res, next) => {
        try {
            let attendance = await attendanceService.delete(req);
            if (attendance) {
                res.code = RESPONSE_DELETED;
                res.message = "Attendance deleted successfully";
                res.data = attendance;
            } else {
                res.code = RESPONSE_NOT_FOUND;
                res.message = "Attendance not found";
                res.data = attendance;
            }
        } catch (e) {
            error(res, e);
        } finally {
            next();
        }
    },
};