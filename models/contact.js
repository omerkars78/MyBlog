const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Contact = sequelize.define("contact", {
    platform: {
        type: DataTypes.STRING,
        allowNull: false
    },
    platformLink: {
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

module.exports = Contact;