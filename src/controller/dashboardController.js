const {Psicologos, Atendimentos, Pacientes} = require ("../models");

const dashboard = {

    async numeroDePsicologos (req, res) {
        const numeroDePsicologos = await Psicologos.findAndCountAll();
        return res.json(`Total de psicologos cadastrados : ${numeroDePsicologos.count}`);
    },
    
    async numeroDePacientes (req, res) {
        const numeroDePacientes = await Pacientes.findAndCountAll();
        return res.json(`Total de pacientes cadastrados : ${numeroDePacientes.count}`);
    },

    async numeroDeAtendimentos (req, res) {
        const numeroDeAtendimentos = await Atendimentos.findAndCountAll();
        return res.json(`Total de atendimentos cadastrados : ${numeroDeAtendimentos.count}`);
    },
    
    
};

module.exports = dashboard;