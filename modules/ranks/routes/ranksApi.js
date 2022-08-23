const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const ranksController = require("../controllers/ranksController");

router.get(
    "/all",
    ranksController.all,
    response
);

router.post(
    "/create",
    ranksController.create,
    response
);

router.patch(
    "/update/:id",
    ranksController.update,
    response
);

router.delete(
    "/delete/:id",
    ranksController.delete,
    response
);

module.exports = router;