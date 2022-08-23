const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const shiftsController = require("../controllers/shiftsController");

router.get(
    "/all",
    shiftsController.all,
    response
);

router.post(
    "/create",
    shiftsController.create,
    response
);

router.patch(
    "/update/:id",
    shiftsController.update,
    response
);

router.delete(
    "/delete/:id",
    shiftsController.delete,
    response
);

module.exports = router;