// importing connection with bd
const db = require("../database");
const { DataTypes } = require("sequelize");
const Atendimentos = require("./Atendimentos");

const Psicologos = db.define(
  "Psicologos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    presentation: {
      type: DataTypes.STRING,
    },
    atendimento_id: {
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
    tableName: "psicologos",
  }
);

module.exports = Psicologos;
