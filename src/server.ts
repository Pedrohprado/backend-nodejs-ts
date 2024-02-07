import express = require('express');
import path = require('path');
import mustacheExpress = require('mustache-express');
import mainRoutes from './routes/index';

const server = express();

//setando as informações para o engine mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, '../src/views'));
server.engine('mustache', mustacheExpress());

//registrando uma página estática
server.use(express.static(path.join(__dirname, '../public')));

//permite eu fazer contato com o body da req.
server.use(express.urlencoded({ extended: true }));

//utilização das rotas que foram setadas em outro diretório
server.use(mainRoutes);

server.use((req: express.Request, res: express.Response) => {
  res.status(404).send('Página não encontrada');
});

server.listen(3000);
