const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const calendarsController = require("../controllers/calendarsController");

router.get(
    "/all",
    calendarsController.all,
    response
);

router.post(
    "/create",
    calendarsController.create,
    response
);

router.patch(
    "/update/:id",
    calendarsController.update,
    response
);

router.delete(
    "/delete/:id",
    calendarsController.delete,
    response
);

module.exports = router;