const Psicologos = require("./Psicologos");
const Pacientes = require("./Pacientes");
const Atendimentos = require("./Atendimentos");

Psicologos.belongsToMany(Pacientes, {
  foreingKey: "psicologo_id",
  through: Atendimentos,
});

Pacientes.belongsToMany(Psicologos, {
  foreingKey: "paciente_id",
  through: Atendimentos,
});

module.exports = {
  Psicologos,
  Pacientes,
  Atendimentos
};
