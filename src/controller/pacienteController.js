const { Pacientes, Atendimentos } = require("../models");

const pacienteController = {
  async listarPacientes(req, res) {
    const listaDePaciente = await Pacientes.findAll({
      include: Atendimentos,
    });
    res.json(listaDePaciente);
  },

  async pegarPaciente(req, res) {
    const { id } = req.params;
    const paciente = await Pacientes.findByPk(id);
    if (!paciente) {
      res.status(404).json("ID not found");
    } else {
      res.status(200).json(paciente);
    }
  },

  async cadastrarPaciente(req, res) {
    const { nome, email, idade } = req.body;
    const novoPaciente = await Pacientes.create({
      nome,
      email,
      idade,
    });

    console.log(req.body);

    res.json(novoPaciente);
  },

  async deletarPaciente(req, res) {
    const { id } = req.params;

    await Pacientes.destroy({
      where: { id },
    });

    res.json("Deletado com sucesso!");
  },

  async atualizarPaciente(req, res) {
    const { id } = req.params;
    const { nome, email, idade } = req.body;
    const pacienteAtualizado = await Pacientes.findOne({ where: { id } });
    pacienteAtualizado.update({
      nome,
      email,
      idade,
    });
    res.status(200).json(pacienteAtualizado);
  },
};

module.exports = pacienteController;
