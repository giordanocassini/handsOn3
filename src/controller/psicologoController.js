const { Psicologos } = require("../models");

const psicologoController = {

  async getAllPiscologos(req, res) {
    const picologosList = await Psicologos.findAll();
    res.json(picologosList);
  },

  async getPiscologo(req, res) {
    const { id } = req.params;
    const piscologo = await Psicologos.findOne({
      where: {
        id,
      },
    });

    res.json(piscologo);
  },

  async createPsicologo(req, res) {
    const { name, email, password, presentation } = req.body;

    // Cadastrando um novo produto através do metodo .create do sequelize conforme modelo pre definido
    const newPsicologo = await Psicologos.create({
      name,
      email,
      password,
      presentation,
    });

    console.log(req.body);
    // Resposta mostrada apos metodo .create
    res.json(newPsicologo);
  },

  async deletePsicologo(req, res) {
    const { id } = req.params;
    await Psicologos.destroy({
      where: {
        id,
      },
    });

    res.json("Psicologo Deletado");
  },

  async updatePsicologo(req, res) {
    const { id } = req.params;
    const { name, email, password, presentation } = req.body;

    const psicologoAtualizado = await Psicologos.update(
      {
        name,
        email,
        password,
        presentation,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json("Psicologo Atualizado");
  },
};

module.exports = psicologoController;
