const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const promotionsController = require("../controllers/promotionsController");

router.get(
    "/all",
    promotionsController.all,
    response
);

router.post(
    "/create",
    promotionsController.create,
    response
);

router.patch(
    "/update/:id",
    promotionsController.update,
    response
);

router.delete(
    "/delete/:id",
    promotionsController.delete,
    response
);

module.exports = router;