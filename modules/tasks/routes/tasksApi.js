const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const tasksController = require("../controllers/tasksController");

router.get(
    "/all",
    tasksController.all,
    response
);

router.post(
    "/create",
    tasksController.create,
    response
);

router.patch(
    "/update/:id",
    tasksController.update,
    response
);

router.delete(
    "/delete/:id",
    tasksController.delete,
    response
);

module.exports = router;