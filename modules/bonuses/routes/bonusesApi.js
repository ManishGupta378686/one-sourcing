const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const bonusesController = require("../controllers/bonusesController");

router.get(
    "/all",
    bonusesController.all,
    response
);

router.post(
    "/create",
    bonusesController.create,
    response
);

router.patch(
    "/update/:id",
    bonusesController.update,
    response
);

router.delete(
    "/delete/:id",
    bonusesController.delete,
    response
);

module.exports = router;