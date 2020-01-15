const express = require('express'); //Importando o Express
const mongoose = require('mongoose'); //Importando o mongoose
const routes = require('./routes'); //Importando as rotas de src/routes.js
const cors = require('cors'); //Permite acessos externos à api

const app = express();

//Conectando ao banco de dados MongoDB
mongoose.connect('mongodb+srv://vinicius-omnistack:Cuecaae123@cluster0-rbxwe.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); //Habilitando o tipo json estrutura de dados
app.use(routes); //Habilitando as rotas

app.listen(3333);