const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const leavesController = require("../controllers/leavesController");

router.get("/allEmployeesLeavesStatus", leavesController.allEmployeesLeavesStatus, response);
router.get("/employeeLeaveStatus/:id", leavesController.employeeLeaveStatus, response);
// router.post("/create", leavesController.create, response);
router.patch("/update/:id", leavesController.update, response);
router.delete("/delete/:id", leavesController.delete, response);

module.exports = router;