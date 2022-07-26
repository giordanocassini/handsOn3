const express = require("express");
const router = express.Router();
const {
  createValidation,
  updateValidation,
  deleteOrReadValidation,
} = require("../validations/psicologos");

const psicologoController = require("../controller/psicologoController");

// // creating routes and indicating methods - Psicologos
router
  .route("/")
  .post(createValidation, psicologoController.cadastrarPsicologo)
  .get(psicologoController.listarPsicologos);
router
  .route("/:id")
  .get(deleteOrReadValidation, psicologoController.pegarPsicologo)
  .put(updateValidation, psicologoController.atualizarPsicologo)
  .delete(deleteOrReadValidation, psicologoController.deletarPsicologo);

module.exports = router;
