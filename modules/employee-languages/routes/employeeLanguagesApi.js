const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const employeeLanguagesController = require("../controllers/employeeLanguagesController");

router.get(
    "/all",
    employeeLanguagesController.all,
    response
);

router.post(
    "/create",
    employeeLanguagesController.create,
    response
);

router.patch(
    "/update/:id",
    employeeLanguagesController.update,
    response
);

router.delete(
    "/delete/:id",
    employeeLanguagesController.delete,
    response
);

module.exports = router;