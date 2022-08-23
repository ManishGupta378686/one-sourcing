const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const departmentsController = require("../controllers/departmentsController");

router.get(
    "/all",
    departmentsController.all,
    response
);

router.post(
    "/create",
    departmentsController.create,
    response
);

router.patch(
    "/update/:id",
    departmentsController.update,
    response
);

router.delete(
    "/delete/:id",
    departmentsController.delete,
    response
);

module.exports = router;