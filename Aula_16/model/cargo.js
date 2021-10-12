const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const Cargo = database.sequelize.define("Cargo", {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Descriçao:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Setor:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false, 
    createdAt: false,
    updatedAt: false,
})

module.exports = Cargo;