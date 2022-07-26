const db = require("../database");
const { DataTypes } = require("sequelize");

const { Atendimentos } = require("../models")
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimento = db.define(
    "Atendimento", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento:{
        type: DataTypes.DATE,
    },
    observacao: {
       type: DataTypes.STRING,
    },
    pacientes_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Pacientes,
            key: "id",
        }
    },
    psicologos_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Psicologos,
            key: "id",
        }
    },
}, 
{
    tableName: "atendimento",
});

module.exports = Atendimento;

