const axios = require('axios');
const Dev = require('../Models/Dev');
const parseStringAsArray  = require('../utils/parseStringAsArray');

// index: exibir uma lista de elementos , show: exibir um unico elemento  , store: criar um elemento , update: atualizar um elemento  , destroy: deletar um elemento.

module.exports = {



    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body; 
        
        let dev = await Dev.findOne({ github_username });

        if(!dev) { 

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login , avatar_url, bio} =  apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        
            console.log(name, avatar_url, bio);
        
            console.log(request.body);

        }
        return response.json(dev);
    },

    async destroy(request, response) {

        const { id } = request.query;

        console.log(id)

        let Excluir;
        
        try{

        Excluir = await Dev.deleteOne({_id: id});
        console.log(Excluir);
            
        }catch(e){
            console.log(e);
        }

        let mensagem;
        
        if(Excluir.deletedCount >= 0) mensagem = "Apagado com sucesso";
        
        else mensagem = "falha ao apagar";

        return response.json(mensagem);
    },

    async update(request, response) {
        
        //Exercicio para testar conhecimentos...
        //Permitir atualizar o Nome, o avatar, a bio , as tecnologias.

        const { id } = request.query;
        const { name, bio , avatar_url, techs } = request.body;
        
        const techsArray = parseStringAsArray(techs); 

        let Atualizacao;
        
        
        
        try{

            Atualizacao = await Dev.update(
                { _id: id},
                { $set: {
                    name,
                    bio,
                    avatar_url,
                    techs: techsArray
                }}
            );

            console.log(Atualizacao);

        }catch(err){
            console.log(err);
        }

        return response.json();
        
    }

};