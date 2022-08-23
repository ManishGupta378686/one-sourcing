const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const employeeRolesController = require("../controllers/employeeRolesController");

router.get(
    "/all",
    employeeRolesController.all,
    response
);

router.post(
    "/create",
    employeeRolesController.create,
    response
);

router.patch(
    "/update/:id",
    employeeRolesController.update,
    response
);

router.delete(
    "/delete/:id",
    employeeRolesController.delete,
    response
);

module.exports = router;