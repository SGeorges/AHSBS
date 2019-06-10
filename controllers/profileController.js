const db = require("../models");

// Defining methods for the profileController

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findOne: function(req, res) {
    db.Player.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function(player){
      db.Data.findAll({
        where: {
          player: player.name,
        },
        include:[{
          model: db.Game,
          as: "Data_GameSync",
          through:{
            attributes: ["date", "h_team_id", "a_team_id"],
          }
        }]
      }).then(function(data){
        var results = [player, data];
        res.json(results);
      })
        .catch(err => res.status(422).json(err));
    });
  }
};
