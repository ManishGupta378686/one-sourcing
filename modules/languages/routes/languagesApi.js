const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const languagesController = require("../controllers/languagesController");

router.get(
    "/all",
    languagesController.all,
    response
);

router.post(
    "/create",
    languagesController.create,
    response
);

router.patch(
    "/update/:id",
    languagesController.update,
    response
);

router.delete(
    "/delete/:id",
    languagesController.delete,
    response
);

module.exports = router;