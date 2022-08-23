const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const salaryDeductionsController = require("../controllers/salaryDeductionsController");

router.get(
    "/all",
    salaryDeductionsController.all,
    response
);

router.post(
    "/create",
    salaryDeductionsController.create,
    response
);

router.patch(
    "/update/:id",
    salaryDeductionsController.update,
    response
);

router.delete(
    "/delete/:id",
    salaryDeductionsController.delete,
    response
);

module.exports = router;