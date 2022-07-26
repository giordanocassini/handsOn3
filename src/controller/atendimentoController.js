const { Atendimentos, Pacientes, Psicologos } = require("../models");

const atendimentoController = {
    listarAtendimentos: async (req, res) =>{
        const listaDeAtendimentos = await Atendimentos.findAll()
        res.json(listaDeAtendimentos);
    },
    async listarAtendimentoId (req, res){
        const {id} = req.params;
        const listaDeAtendimentoId = await Atendimentos.findOne({
            where: {id,}
        });
        if(!listaDeAtendimentoId ){
            res.status(404).json("ID not found");
        }
        else { res.status(200).json(listaDeAtendimentoId);}
    },
    
    async cadastrarAtendimento(req, res){
        const { data_atendimento, observacao, pacientes_id, psicologos_id } = req.body;
        console.log("🚀 ~ file: atendimentoController.js ~ line 21 ~ cadastrarAtendimento ~ psicologos_id", psicologos_id)
        console.log("🚀 ~ file: atendimentoController.js ~ line 21 ~ cadastrarAtendimento ~ pacientes_id", pacientes_id)
        const paciente = await Pacientes.findByPk(pacientes_id);
        console.log("🚀 ~ file: atendimentoController.js ~ line 22 ~ cadastrarAtendimento ~ paciente", paciente)
        const psicologo = await Psicologos.findByPk(psicologos_id);
        console.log("🚀 ~ file: atendimentoController.js ~ line 24 ~ cadastrarAtendimento ~ psicologo", psicologo)
        const novoAtendimento = await Atendimentos.create({
            data_atendimento,
            observacao,
            pacientes_id,
            psicologos_id,
        });
        /* const atendimentos_id = novoAtendimento.id;
        await paciente.update({
           atendimentos_id 
        })
        await psicologo.update({
           atendimentos_id 
        }) */
        console.log(req.body);
       
        res.json(novoAtendimento);
    },    
};
module.exports = atendimentoController;