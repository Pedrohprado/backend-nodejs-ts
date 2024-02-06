import express = require('express');
import path = require('path');
import mustacheExpress = require('mustache-express');
import mainRoutes from './routes/index';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustacheExpress());

//registrando uma página estática
server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req: express.Request, res: express.Response) => {
  res.status(404).send('Página não encontrada');
});

server.listen(3000);
