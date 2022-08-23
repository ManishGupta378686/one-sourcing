const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const projectsController = require("../controllers/projectsController");

router.get(
    "/all",
    projectsController.all,
    response
);

router.post(
    "/create",
    projectsController.create,
    response
);

router.patch(
    "/update/:id",
    projectsController.update,
    response
);

router.delete(
    "/delete/:id",
    projectsController.delete,
    response
);

module.exports = router;