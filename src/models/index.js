const Piscologos = require('./Psicologos');
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos');

Piscologos.belongsToMany(Pacientes, {
    foreingKey: "piscologo_id",
    through: Atendimentos
});

Pacientes.belongsToMany(Piscologos, {
    foreingKey: "piscologo_id",
    through: Atendimentos
});