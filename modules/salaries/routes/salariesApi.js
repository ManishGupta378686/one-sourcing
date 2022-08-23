const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const salariesController = require("../controllers/salariesController");

router.get(
    "/all",
    salariesController.all,
    response
);

router.post(
    "/create",
    salariesController.create,
    response
);

router.patch(
    "/update/:id",
    salariesController.update,
    response
);

router.delete(
    "/delete/:id",
    salariesController.delete,
    response
);

module.exports = router;