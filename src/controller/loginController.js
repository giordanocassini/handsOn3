const { Psicologos, Atendimentos } = require("../models");
const bcrypt = require("bcryptjs");

const psicologoController = {

  async efetuarLogin(req, res) {
    const { email, senha } = req.body;
    const hashSenha = bcrypt.hashSync(senha, 10);
    const novoPsicologo = await Psicologos.create({
      nome,
      email,
      senha: hashSenha,
      apresentacao,
    });

    res.json(novoPsicologo);
  },

  async deletarPsicologo(req, res) {
    const { id } = req.params;
    try {
      const psicologoASerDeletado = await Psicologos.findByPk(id);
      if (!psicologoASerDeletado) throw new Error("Psicologo não encontrado!");
      await Psicologos.destroy({
        where: { id },
      });
      res.status(204).json("Psicologo deletado com sucesso!");
    }catch (error) {
      res.status(400).json(error.message);
    }
  },

  async atualizarPsicologo(req, res) {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;
    try {
      const psicologoAtualizado = await Psicologos.findByPk(id);
      if (!psicologoAtualizado) throw new Error("Psicologo não encontrado!");
      psicologoAtualizado.update({
        nome,
        email,
        senha,
        apresentacao,
      });
      res.status(200).json(psicologoAtualizado);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};

module.exports = psicologoController;