const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/profile"
router
  .route("/:id")
  .get(profileController.findOne);

module.exports = router;
