module.exports = function(sequelize, DataTypes) {
    var Data = sequelize.define("Data", {
        player: DataTypes.STRING,
        shots: DataTypes.INTEGER,
        goals: DataTypes.INTEGER,
        assists: DataTypes.INTEGER,
        shots_on_goal: DataTypes.INTEGER,
        saves: DataTypes.INTEGER,
        goals_against: DataTypes.INTEGER,
        playoff: DataTypes.BOOLEAN,
    }, {
      timestamps: false
    });
  
    Data.associate = function(models) {
        Data.belongsTo(models.Game, {
            onDelete: "cascade"
        });
        Data.belongsToMany(models.Game, {
            through: "GameDataList",
            as: "Data_GameSync",
            timestamps: false,
            foreignKey: "dataId"
        });
    };
  
    return Data;
  };