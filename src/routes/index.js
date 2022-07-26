const express = require("express");
const psicologoController = require("../controller/psicologoController");
const atendimentoController = require("../controller/atendimentoController");
const routes = express.Router();

// const pacienteController = require("../controller/pacienteController");
// const atendimentoController = require('../controller/atendimentoController');


// // creating route and indicating method - Login
// routes.post("/login", )

// // creating routes and indicating methods - Psicologos
routes.post("/psicologos", psicologoController.createPsicologo);
routes.get("/psicologos", psicologoController.getAllPiscologos);
routes.get("/psicologos/:id", psicologoController.getPiscologo);
routes.put("/psicologos/:id", psicologoController.updatePsicologo);
routes.delete("/psicologos/:id", psicologoController.deletePsicologo);

// // creating routes and indicating methods - Pacientes
// routes.post("/pacientes/criar", pacienteController.cadastrarPaciente);
// routes.get("/pacientes/lista", pacienteController.listarPaciente);
// routes.get("/pacientes/:id/lista", pacienteController.listarPacienteId);
// routes.put("/pacientes/:id/atualizar", pacienteController.atualizarPaciente);
// routes.delete("/pacientes/:id/deletar", pacienteController.deletarPaciente);

// creating routes and indicating methods - Pacientes
routes.post("/atendimentos/criar", atendimentoController.cadastrarAtendimento);
routes.get("/atendimentos/lista", atendimentoController.listarAtendimento);
routes.get("/atendimentos/:id/lista", atendimentoController.listarAtendimentoId);

module.exports = routes;