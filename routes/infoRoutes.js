const express = require("express");
const InfoController = require("../controllers/infoController");
const router = express.Router();

router.get("/info/:id", InfoController.getById);
router.get("/info", InfoController.getAll);
router.post("/info", InfoController.create);
router.put("/info/:id", InfoController.update);
router.delete("/info/:id", InfoController.delete);

module.exports = router;
