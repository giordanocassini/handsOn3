const express = require("express");
const routes = express.Router();

const psicologoController = require("../controller/psicologoController");
const pacienteController = require("../controller/pacienteController");
const atendimentoController = require("../controller/atendimentoController");

// // creating routes and indicating methods - Psicologos
routes.post("/psicologos", psicologoController.cadastrarPsicologo);
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.get("/psicologos/:id", psicologoController.pegarPsicologo);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo);

// // creating routes and indicating methods - Pacientes
routes.post("/paciente", pacienteController.cadastrarPaciente);
routes.get("/pacientes", pacienteController.listarPacientes);
routes.get("/pacientes/:id", pacienteController.pegarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);

// // creating routes and indicating methods - Atendimentos
routes.post("/atendimento", atendimentoController.cadastrarAtendimento);
routes.get("/atendimentos", atendimentoController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentoController.pegarAtendimento);

module.exports = routes;