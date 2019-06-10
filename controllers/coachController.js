const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    console.log("Coeaches happened: " + req.params.season);

    db.Coach.findAll({ 
      where: {
        year: req.params.season,
      }
    }).then(function(results){ 
      res.json(results); 
    }).catch(err => res.status(422).json(err));
  }
};
