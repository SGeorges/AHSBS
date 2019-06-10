const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Game.findAll({
      where: {
        year: req.params.year
      }
    }).then(function(results){
      res.json(results);
    }).catch(err => res.status(422).json(err));
  }
};