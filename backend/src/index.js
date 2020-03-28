const express = require('express'); // Importar Express
const cors = require('cors');
const routes = require('./routes'); // ./ serve para referenciar o arquivo na mesma pasta


const app = express(); // instanciar aplicação

app.use(cors()); // determina quem pode acessar a API
app.use(express.json()); // Converte body das requisições em json
app.use(routes); 

app.listen(3333); // Escutar na porta 3333

/**
 *Rota / Recurso

 * Métodos HTTP:
 *
 * GET:Buscar uma informação do back-end
 * POST: Criar uma informação
 * PUT: Alterar 
 * DELETE: Deletar.

 ****************************
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" ( Filtros ). Muitos            *const params = request.query; 
 * Route Params: Parâmetros utilizados para identificar recursos. * app.get('/teste/:id', ... *const params = request.params;
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. *const params = request.body
 * 
 * 
 * Banco de Dados
 * 
 * Driver: Select * from users
 * Query Builder: table('users').selec('*').where(); // mais flexivel, podendo mudar de banco de dados sem problema sem alteração
 * Query Builder Utilizado : Knex.js

*/






