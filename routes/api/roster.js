const router = require("express").Router();
const rosterController = require("../../controllers/rosterController");


router.route('/').get((req, res) => res.send('hi'));

// Matches with "/api/ roster/:season"
router
  .route("/:season")
  .get(rosterController.findOne)


module.exports = router;
