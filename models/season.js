module.exports = function(sequelize, DataTypes) {
  var Season = sequelize.define("Season", {
      year: DataTypes.INTEGER,
  }, {
    timestamps: false
  });

  Season.associate = function(models) {
    Season.belongsToMany(models.Player, {
      through: "SeasonPlayerList",
      as: "Player_SeasonSync",
      timestamps: false,
      foreignKey: "seasonId"
    });
  };

  return Season;
};  