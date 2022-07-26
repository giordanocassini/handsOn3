const express = require("express");
const router = express.Router();

const psicologoController = require("../controller/psicologoController");

// // creating routes and indicating methods - Psicologos
router
  .route("/")
  .post(psicologoController.cadastrarPsicologo)
  .get(psicologoController.listarPsicologos);
router
  .route("/:id")
  .get(psicologoController.pegarPsicologo)
  .put(psicologoController.atualizarPsicologo)
  .delete(psicologoController.deletarPsicologo);

  module.exports = router;