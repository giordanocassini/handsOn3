const Pacientes = require("../models/Pacientes");

const pacienteController = {
    listarPacientes: async (req, res) =>{
        const listaDePaciente = await Pacientes.findAll()
        res.json(listaDePaciente);
    },
    async listarPacienteId (req, res){
        const {id} = req.params;
        const listaDePacienteId = await Pacientes.findOne({
            where: {id,}
        });
        if(!listaDePacienteId){
            res.status(404).json("ID not found");
        }
        else { res.status(200).json(listaDePacienteId);}
    },
    
    async cadastrarPaciente(req, res){
        
        const { nome, email, idade,} = req.body;
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            idade,
        });

        console.log(req.body);
       
        res.json(novoPaciente);
    },

    async deletarPaciente(req, res) {
        const {id} = req.params;
        
        await Pacientes.destroy({        
            where: { id,},
        });

        res.json("Successfully deleted!")
    },

    async atualizarPaciente (req, res){
        const { id } = req.params;
        const { nome, email, idade, } = req.body;
        const pacienteAtualizado = await Pacientes.findOne({where: {id}});
        pacienteAtualizado.update({ 
            nome,
            email,
            idade,
        });
        res.status(200).json(pacienteAtualizado);
    },
      
};
module.exports = pacienteController;