const db = require("../database");
const { DataTypes } = require("sequelize");

const Paciente = require("./Paciente");
const Psicologo = require("./Psicologo");

const Atendimentos = db.define(
  "Atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    appointmentDate: {
      type: DataTypes.DATE,
    },
    note: {
      type: DataTypes.STRING,
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "id",
      },
    },
    piscologo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Piscologos,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updateAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "atendimentos",
  }
);

// Exportando a extrutura
module.exports = Atendimentos;
