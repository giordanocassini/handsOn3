const { Psicologos, Atendimentos } = require("../models");

const psicologoController = {
  async listarPsicologos(req, res) {
    const listaDePsicologos = await Psicologos.findAll({
      include: Atendimentos,
    });
    res.json(listaDePsicologos);
  },
  async pegarPsicologo(req, res) {
    const { id } = req.params;
    const listaDePsicologoId = await Psicologos.findOne({
      where: id,
    });
    if (!listaDePsicologoId) {
      res.status(404).json("ID not found");
    } else {
      res.status(200).json(listaDePsicologoId);
    }
  },

  async cadastrarPsicologo(req, res) {
    const { nome, email, senha, apresentacao } = req.body;
    const novoPsicologo = await Psicologos.create({
      nome,
      email,
      senha,
      apresentacao,
    });

    console.log(req.body);

    res.json(novoPsicologo);
  },

  async deletarPsicologo(req, res) {
    const { id } = req.params;

    await Psicologos.destroy({
      where: { id },
    });

    res.json("Successfully deleted!");
  },

  async atualizarPsicologo(req, res) {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;
    // const newSenha = bcrypt.hashSync(senha, 10);
    const psicologoAtualizado = await Psicologos.findOne({ where: { id } });
    psicologoAtualizado.update({
      nome,
      email,
      senha,
      apresentacao,
    });
    res.status(200).json(psicologoAtualizado);
  },
};

module.exports = psicologoController;
