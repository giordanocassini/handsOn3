// importing connection with bd
const db = require("../database");

// importing sequelize types according to the bd and .js
const { DataTypes } = require("sequelize");

// const Atendimento = require("./Atendimento");

// Creating object and from connection defining table model
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
