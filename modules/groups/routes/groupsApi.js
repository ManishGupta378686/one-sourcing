const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const groupsController = require("../controllers/groupsController");

router.get(
    "/all",
    groupsController.all,
    response
);

router.post(
    "/create",
    groupsController.create,
    response
);

router.patch(
    "/update/:id",
    groupsController.update,
    response
);

router.delete(
    "/delete/:id",
    groupsController.delete,
    response
);

module.exports = router;