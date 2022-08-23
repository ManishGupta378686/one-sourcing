const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const meetingsController = require("../controllers/meetingsController");

router.get(
    "/all",
    meetingsController.all,
    response
);

router.post(
    "/create",
    meetingsController.create,
    response
);

router.patch(
    "/update/:id",
    meetingsController.update,
    response
);

router.delete(
    "/delete/:id",
    meetingsController.delete,
    response
);

module.exports = router;