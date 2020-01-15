const { Router } = require('express'); // importando apenas o Router() de dentro do Express
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router(); //Criando o routes

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store );

routes.get('/search', SearchController.index )

module.exports = routes; //Exportando as rotas para serem usadas no Index