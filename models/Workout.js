const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Workout = sequelize.define("workout", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reps: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  load: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Workout;
