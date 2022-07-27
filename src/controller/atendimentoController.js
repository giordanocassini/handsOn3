const { Atendimentos, Pacientes } = require("../models");

const atendimentoController = {
  async listarAtendimentos(req, res) {
    const listaDeAtendimentos = await Atendimentos.findAll();
    res.json(listaDeAtendimentos);
  },

  async pegarAtendimento(req, res) {
    const { id } = req.params;
    const listaDeAtendimentoId = await Atendimentos.findByPk(id);
    if (!listaDeAtendimentoId)
      res.status(404).json("Atendimento não encontrando");
    return res.status(200).json(listaDeAtendimentoId);
  },

  async cadastrarAtendimento(req, res) {
    const {
      data_atendimento,
      observacao,
      paciente_id,
      psicologo_id /* esse parametro apos implementado o login vira pelo JWT */,
    } = req.body;
    try {
      const paciente = await Pacientes.findByPk(paciente_id);
      if (!paciente) throw new Error("Paciente não encontrado.");
      const novoAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        paciente_id,
        psicologo_id,
      });
      return res.status(200).json(novoAtendimento);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  },
};

module.exports = atendimentoController;
