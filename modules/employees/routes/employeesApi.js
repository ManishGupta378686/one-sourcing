const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const employeesController = require("../controllers/employeesController");

router.get("/allEmployeesBasicInfo", employeesController.allEmployeesBasicInfo, response);
router.get("/allEmployeesQualification", employeesController.allEmployeesQualification, response);
router.get("/allEmployeesAddress", employeesController.allEmployeesAddress, response);
router.get("/allEmployeesExperience", employeesController.allEmployeesExperience, response);
router.get("/employeesBasicInfo/:id", employeesController.employeesBasicInfo, response);
router.get("/employeesQualification/:id", employeesController.employeesQualification, response);
router.get("/employeesAddress/:id", employeesController.employeesAddress, response);
router.get("/employeesExperience/:id", employeesController.employeesExperience, response);
router.post("/create", employeesController.create, response);
router.patch("/update/:id",employeesController.update,response);
router.delete("/delete/:id",employeesController.delete,response);

module.exports = router;