const db = require("../database");
const { DataTypes } = require("sequelize");

const Paciente = require("./Paciente");
const Psicologo = require("./Psicologo");

const Atendimento = db.define(
    "Atendimento", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    serviceDate:{
        type: DataTypes.DATE,
    },
    note: {
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
    tableName: "atendimento",
});

// Exportando a extrutura 
module.exports = Atendimento;

