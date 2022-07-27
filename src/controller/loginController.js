const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");

const loginController = {
  async efetuarLogin(req, res) {
    const { email, senha } = req.body;
    try {
      const psicologo = await Psicologos.findOne({
        where: {
          email,
        },
      });
      if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha))
        throw new Error("Email ou senha inválidos");
      return res.status(200).json("Usuário logado");
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
};

module.exports = loginController;
