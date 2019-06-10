module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
        hs_name: DataTypes.STRING,
        hs_address: DataTypes.STRING,
        hs_logo: DataTypes. STRING,
    }, {
        timestamps: false
    });

    return Team;
};  