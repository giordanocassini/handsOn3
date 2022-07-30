const dashboard = require("../controller/dashboardController");
const express = require("express");
const router = express.Router();

router.route("/atendimentos").get( dashboard.numeroDeAtendimentos )  
router.route("/psicologos").get( dashboard.numeroDePsicologos )
router.route("/pacientes").get(dashboard.numeroDePacientes)
router.route("/mediaAtendimentosPsicologos").get( dashboard.mediaAtendimentosPsicologos)
  
module.exports = router;