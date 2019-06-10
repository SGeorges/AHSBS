module.exports = function(sequelize, DataTypes){
  var Player = sequelize.define("Player", {
    name: DataTypes.STRING,
    num: DataTypes.INTEGER,
    pos: DataTypes.STRING,
    yr: DataTypes.STRING,
    ht: DataTypes.STRING,
    wt: DataTypes.INTEGER,
    img: DataTypes.STRING,
    about: DataTypes.TEXT
  }, {
    timestamps: false
  });

  Player.associate = function(models) {
    Player.belongsToMany(models.Season, {
      through: "SeasonPlayerList",
      as: "Player_SeasonSync",
      timestamps: false,
      foreignKey: "playerId"
    });
  };

  return Player;
};