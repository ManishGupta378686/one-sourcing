const router = require("express").Router();
const { response } = require("../../../middlewares/response");
const skillsController = require("../controllers/skillsController");

router.get(
    "/all",
    skillsController.all,
    response
);

router.post(
    "/create",
    skillsController.create,
    response
);

router.patch(
    "/update/:id",
    skillsController.update,
    response
);

router.delete(
    "/delete/:id",
    skillsController.delete,
    response
);

module.exports = router;