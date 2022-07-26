const express = require("express");
const router = express.Router();

const atendimentoController = require("../controller/atendimentoController");

router
  .route("/")
  .post(atendimentoController.cadastrarAtendimento)
  .get(atendimentoController.listarAtendimentos);

router.route("/:id").get(atendimentoController.pegarAtendimento);

module.exports = router;
