const router = require("express").Router();
const coachController = require("../../controllers/coachController");


router.route('/').get((req, res) => res.send('hi'));

// Matches with "/api/coaches/:season"
router
  .route("/:season")
  .get(coachController.findAll)


module.exports = router;
