module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    date: DataTypes.STRING,
    home_team: DataTypes.STRING,
    home_score: DataTypes.INTEGER,
    away_team: DataTypes.STRING,
    away_score: DataTypes.INTEGER,
    year: DataTypes.INTEGER
  }, {
    timestamps: false
  });

  Game.associate = function(models) {
      Game.belongsToMany(models.Data, {
        through: "GameDataList",
        as: "Data_GameSync",
        timestamps: false,
        foreignKey: "gameId"
    });
  };

  return Game;
};