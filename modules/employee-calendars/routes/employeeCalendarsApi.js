const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const employeeCalendarsController = require("../controllers/employeeCalendarsController");

router.get(
    "/all",
    employeeCalendarsController.all,
    response
);

router.post(
    "/create",
    employeeCalendarsController.create,
    response
);

router.patch(
    "/update/:id",
    employeeCalendarsController.update,
    response
);

router.delete(
    "/delete/:id",
    employeeCalendarsController.delete,
    response
);

module.exports = router;