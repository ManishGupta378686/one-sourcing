const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const salaryStructuresController = require("../controllers/salaryStructuresController");

router.get(
    "/all",
    salaryStructuresController.all,
    response
);

router.post(
    "/create",
    salaryStructuresController.create,
    response
);

router.patch(
    "/update/:id",
    salaryStructuresController.update,
    response
);

router.delete(
    "/delete/:id",
    salaryStructuresController.delete,
    response
);

module.exports = router;