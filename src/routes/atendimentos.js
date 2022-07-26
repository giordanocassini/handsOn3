const express = require("express");
const router = express.Router();

const atendimentoController = require("../controller/atendimentoController");

const {
  createValidation,
  deleteOrReadValidation,
} = require("../validations/atendimentos");

router
  .route("/")
  .post(createValidation, atendimentoController.cadastrarAtendimento)
  .get(deleteOrReadValidation, atendimentoController.listarAtendimentos);

router.route("/:id").get(deleteOrReadValidation, atendimentoController.pegarAtendimento);

module.exports = router;
