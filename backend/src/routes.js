const { Router } = require('express');
const DevController = require('./Controllers/DevController');
const SearchController = require('./Controllers/SearchController');

const routes = Router();


//aqui crio a primeira rota para minha aplicação.
routes.post('/devs',DevController.store);

routes.get('/devs', DevController.index);

routes.delete('/devs', DevController.destroy);

routes.put('/devs', DevController.update);

routes.get('/search', SearchController.index);




module.exports = routes;