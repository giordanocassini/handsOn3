const { Atendimentos } = require("../models");

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
        const novoAtendimento = await Atendimentos.create({
            data_atendimento,
            observacao,
            pacientes_id,
            psicologos_id,
        });

        console.log(req.body);
       
        res.json(novoAtendimento);
    },    
};
module.exports = atendimentoController;