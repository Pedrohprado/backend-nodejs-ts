import express = require('express');

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Olá');
});

router.get('/contato', (req: express.Request, res: express.Response) => {
  res.send('contatos');
});

router.get('/sobre', (req: express.Request, res: express.Response) => {
  res.send('sobre');
});

export default router;
