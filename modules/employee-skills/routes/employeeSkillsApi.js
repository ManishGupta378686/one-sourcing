const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const employeeSkillsController = require("../controllers/employeeSkillsController");

router.get(
    "/all",
    employeeSkillsController.all,
    response
);

router.post(
    "/create",
    employeeSkillsController.create,
    response
);

router.patch(
    "/update/:id",
    employeeSkillsController.update,
    response
);

router.delete(
    "/delete/:id",
    employeeSkillsController.delete,
    response
);

module.exports = router;