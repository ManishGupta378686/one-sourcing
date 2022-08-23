const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Employee = require('../modules/employees/models/employeesModel.js');
const EmployeeAddress = require('../modules/employees/models/employeesAddressModel.js');
const EmployeeExperience = require('../modules/employees/models/employeesExperienceModel.js');
const EmployeeQualification = require('../modules/employees/models/employeesQualificationModel.js');
const EmployeeRole = require('../modules/employee-roles/models/employeeRolesModel.js');
const Role = require('../modules/roles/models/rolesModel.js');
const Department = require('../modules/departments/models/departmentsModel.js');
const Attendance = require('../modules/attendances/models/attendancesModel.js');
const Leave = require('../modules/leaves/models/leavesModel.js');
const Shift = require('../modules/shifts/models/shiftsModel.js');
const Skill = require('../modules/skills/models/skillsModel.js');
const EmployeeSkill = require('../modules/employee-skills/models/employeeSkillsModel.js');
const Language = require('../modules/languages/models/languagesModel.js');
const EmployeeLanguage = require('../modules/employee-languages/models/employeeLanguagesModel.js');
const Calendar = require('../modules/calendars/models/calendarsModel.js');
const EmployeeCalendar = require('../modules/employee-calendars/models/employeeCalendarsModel.js');

Employee.belongsToMany(Role, { through: EmployeeRole, foreignKey: 'employee_id' });
Role.belongsToMany(Employee, { through: EmployeeRole, foreignKey: 'role_id' });

Employee.belongsToMany(Calendar, { through: EmployeeCalendar, foreignKey: 'employee_id' });
Calendar.belongsToMany(Employee, { through: EmployeeCalendar, foreignKey: 'calendar_id' });

Employee.belongsToMany(Skill, { through: EmployeeSkill, foreignKey: 'employee_id' });
Skill.belongsToMany(Employee, { through: EmployeeSkill, foreignKey: 'skill_id' });

Employee.belongsToMany(Language, { through: EmployeeLanguage, foreignKey: 'employee_id' });
Language.belongsToMany(Employee, { through: EmployeeLanguage, foreignKey: 'language_id' });

Employee.hasMany(EmployeeAddress, { foreignKey: "employee_id" });
EmployeeAddress.belongsTo(Employee, { foreignKey: "employee_id" });

Employee.hasMany(EmployeeExperience, { foreignKey: "employee_id" });
EmployeeExperience.belongsTo(Employee, { foreignKey: "employee_id" });

Department.hasMany(Role, { foreignKey: "department_id" });
Role.belongsTo(Department, { foreignKey: "department_id" });

Employee.hasMany(Attendance, { foreignKey: "employee_id" });
Attendance.belongsTo(Employee, { foreignKey: "employee_id" });

Shift.hasMany(Employee, { foreignKey: "shift_id" });
Employee.belongsTo(Shift, { foreignKey: "shift_id" });

Employee.hasOne(EmployeeQualification, { foreignKey: "employee_id" });
EmployeeQualification.belongsTo(Employee, { foreignKey: "employee_id" });

Employee.hasOne(Department, { foreignKey: "employee_id" });
Department.belongsTo(Employee, { foreignKey: "employee_id" });

Employee.hasOne(Leave, { foreignKey: "employee_id" });
Leave.belongsTo(Employee, { foreignKey: "employee_id" });

