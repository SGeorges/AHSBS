const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findOne: function(req, res) {
    db.Game.findOne({
      where: {
        id: req.params.id,
      },
      include: [{
        model: db.Data,
        as: "Data_GameSync",
        through:{
          attributes: ["player", "shots", "goals", "assists"]
        }
      }]
    }).then(function(results){
      res.json(results);
    }).catch(err => res.status(422).json(err));
  }
};