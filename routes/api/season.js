const router = require("express").Router();
const seasonController = require("../../controllers/seasonController");

// Matches with "/api/roster"
router.route('/').get((req, res) => res.send('hi'));

// Matches with "/api/ roster/:season"
router
  .route("/:year")
  .get(seasonController.findAll)


module.exports = router;
