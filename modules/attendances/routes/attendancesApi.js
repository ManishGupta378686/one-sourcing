const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const attendancesController = require("../controllers/attendancesController");

router.get("/all", attendancesController.all, response);
router.get('/employeeAttendance/:id', attendancesController.employeeAttendance, response);
router.post("/takeAttendance", attendancesController.takeAttendance, response);
router.patch("/update/:id", attendancesController.update, response);
router.delete("/delete/:id", attendancesController.delete, response);

module.exports = router;