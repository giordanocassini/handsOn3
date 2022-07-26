const express = require("express");
const router = express.Router();
const { createValidation, updateValidation, deleteValidation, readValidation } = require("../validations/psicologos");

const psicologoController = require("../controller/psicologoController");

// // creating routes and indicating methods - Psicologos
router
  .route("/")
  .post(createValidation, psicologoController.cadastrarPsicologo)
  .get(psicologoController.listarPsicologos);
router
  .route("/:id")
  .get(readValidation, psicologoController.pegarPsicologo)
  .put(updateValidation, psicologoController.atualizarPsicologo)
  .delete(deleteValidation, psicologoController.deletarPsicologo);

module.exports = router;
