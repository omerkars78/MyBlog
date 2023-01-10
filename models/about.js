const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const About = sequelize.define("about", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resim: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
});

module.exports = About;