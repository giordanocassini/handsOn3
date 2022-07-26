const express = require("express");
const router = express.Router();

const pacienteController = require("../controller/pacienteController");

// // creating routes and indicating methods - pacientes
router
  .route("/")
  .post(pacienteController.cadastrarPaciente)
  .get(pacienteController.listarPacientes);
router
  .route("/:id")
  .get(pacienteController.pegarPaciente)
  .put(pacienteController.atualizarPaciente)
  .delete(pacienteController.deletarPaciente);
  
  module.exports = router;
