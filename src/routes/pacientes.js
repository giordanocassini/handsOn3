const express = require("express");
const router = express.Router();

const pacienteController = require("../controller/pacienteController");
const {
  createValidation,
  updateValidation,
  deleteOrReadValidation,
} = require("../validations/pacientes");

// // creating routes and indicating methods - pacientes
router
  .route("/")
  .post(createValidation, pacienteController.cadastrarPaciente)
  .get(pacienteController.listarPacientes);
router
  .route("/:id")
  .get(deleteOrReadValidation, pacienteController.pegarPaciente)
  .put(updateValidation, pacienteController.atualizarPaciente)
  .delete(deleteOrReadValidation, pacienteController.deletarPaciente);

module.exports = router;
