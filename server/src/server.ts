import express from 'express';
import routes from './routes';

const app = express();

//GET: buscar ou listar uma informação
//POST: criar alguma nova informação
//PUT: atualizar informação
//DELETE: deletar uma informação

// *** baixar insominia COR

// Corpo da requisição (Request Body): dados para criação ou atualização de um registro
// Route Params: identificar qual recurso pretende atualizar ou deletar 
//Query params: listar paginação, filtros, ordenação

app.use(express.json());
app.use(routes);

app.listen (3333);
