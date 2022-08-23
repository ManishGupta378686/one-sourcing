const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const feedbacksController = require("../controllers/feedbacksController");

router.get(
    "/all",
    feedbacksController.all,
    response
);

router.post(
    "/create",
    feedbacksController.create,
    response
);

router.patch(
    "/update/:id",
    feedbacksController.update,
    response
);

router.delete(
    "/delete/:id",
    feedbacksController.delete,
    response
);

module.exports = router;