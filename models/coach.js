module.exports = function(sequelize, DataTypes) {
    var Coach = sequelize.define("Coach", {
        coach_name: DataTypes.STRING,
        coach_role: DataTypes.STRING,
        year: DataTypes.INTEGER,
    }, {
        timestamps: false
    });

    Coach.associate = function(models) {
    };

    return Coach;
};  