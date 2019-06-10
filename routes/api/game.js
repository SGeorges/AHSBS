const router = require("express").Router();
const gameController = require("../../controllers/gameController");

// Matches with "/api/game"
router.route('/').get((req, res) => res.send('hi'));

// Matches with "/api/game/:id"
router
  .route("/:id")
  .get(gameController.findOne)


module.exports = router;

