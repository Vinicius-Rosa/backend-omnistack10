const axios = require('axios'); //importando a biblioteca axios, que permite fazer chamadas para outras api's
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//Funções padrão do Controller: index, show, update, destroy

module.exports = {
    async index (req, res){
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store (req, res) {
        const { github_username, techs, latitude, longitude } = req.body; // Obtendo o username do Github a partir do corpo da requisição
    
        let dev = await Dev.findOne({ github_username }); //Verificando se já existe o usuário

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //requisição assíncrona à api do github
        
            const { name = login /**Sobrepondo a variável name caso seja nula */, 
                avatar_url, bio  } = apiResponse.data; //obtendo apenas nome, avatar e bio da api
        
            console.log(name, avatar_url, bio, github_username);
            
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

        }
    
        return res.json(dev);
    }
};