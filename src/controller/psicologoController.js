const Psicologos = require("../models/Psicologos");

const psicologoController = {
    listarPsicologo: async (req, res) =>{

        const listaDePsicologos = await Psicologos.findAll()

        res.json(listaDePsicologos)
    },

    listarPsicologoId: async (req, res) =>{

        const listaDePsicologosId = await Psicologos.findOne({
            where: { 
                id,
            },
        }    
        )

        res.json(listaDePsicologosId)
    },
        

    async cadastrarPsicologo(req, res){
        const { nome, email, senha, apresentacao } = req.body;

        // Cadastrando um novo produto através do metodo .create do sequelize conforme modelo pre definido 
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            apresentacao,
        });

        console.log(req.body);
        // Resposta mostrada apos metodo .create
        res.json(novoPsicologo);
    },

    async deletarPsicologo(req, res) {

        // desestruturarando o objeto usando o {id} do psicologo a ser deletado
        const {id} = req.params;

        // Função assincrona, apartir modelo Psicologos, aplica-se o metodo .destroy
        await Psicologos.destroy({
        // Criamos a propiedade where que especifica onde, pelo ID, o metodo .destroy será aplicado.
            where: { 
                id,
            },
        });

        res.json("Psicologo Deletado")
    },

    async atualizarPsicologo (req, res) {
        const {id} = req.params;
        const {nome, email, senha, apresentacao} = req.body;

        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha,
            apresentacao,
        },
        {
            where: {
                id,
            },
        }
        );
        res.json("Psicologo Atualizado");        
    },

    
};

module.exports = psicologoController;