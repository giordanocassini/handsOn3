// importing connection with bd
const db = require("../database");

// importing sequelize types according to the bd and .js
const { DataTypes } = require("sequelize");

// const Atendimento = require("./Atendimento");

// Creating object and from connection defining table model
const Psicologos = db.define(
    "Psicologo", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
       type: DataTypes.STRING,
    },
    apresentacao : {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updateAt: {
        type: DataTypes.DATE,
    },
}, 
{
    tableName: "psicologo",
});

// // Exporting structure
module.exports = Psicologos;


