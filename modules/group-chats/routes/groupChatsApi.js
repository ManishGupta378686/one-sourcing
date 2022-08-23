const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const groupChatsController = require("../controllers/groupChatsController");

router.get(
    "/all",
    groupChatsController.all,
    response
);

router.post(
    "/create",
    groupChatsController.create,
    response
);

router.patch(
    "/update/:id",
    groupChatsController.update,
    response
);

router.delete(
    "/delete/:id",
    groupChatsController.delete,
    response
);

module.exports = router;