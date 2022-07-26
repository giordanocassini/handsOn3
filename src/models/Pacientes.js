const db = require("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = require("./Atendimentos");

const Pacientes = db.define(
    "Pacientes", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    age: {
       type: DataTypes.DATE,
    },
    atedimento_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Atendimentos,
            key: 'id'
        }
      },
    createdAt: {
        type: DataTypes.DATE,
    },
    updateAt: {
        type: DataTypes.DATE,
    },
}, 
{
    tableName: "pacientes",
});

// Exportando a extrutura 
module.exports = Paciente;

