const path = require("path");
const router = require("express").Router();
const rosterRoutes = require("./roster");
const profileRoutes = require("./profile");
const seasonRoutes = require("./season");
const gameRoutes = require("./game");
const coachesRoutes = require("./coaches");

// roster routes
router.use("/roster", rosterRoutes);

// profile Routes
router.use("/profile", profileRoutes);

// season Routes
router.use("/season", seasonRoutes);

// game Routes
router.use("/game", gameRoutes);

// coaches Routes
router.use("/coaches", coachesRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
