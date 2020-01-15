const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

//Criando o Schema/Tabela do banco de dados
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], //Declarando techs como um array de strings
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema); //Exportando o model + o schema do Dev