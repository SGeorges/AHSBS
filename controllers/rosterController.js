const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findOne: function(req, res) {
    console.log("happened: " + req.params.season);

    db.Season.findOne({ 
      where: {
        year: req.params.season,
      },
      include:[{
        model: db.Player,
        as: "Player_SeasonSync",
        through:{
          attributes: ["name", "num", "pos", "yr", "img"],
        }
      }],
    }).then(function(results){ 
      res.json(results); 
    }).catch(err => res.status(422).json(err));
  }
};
