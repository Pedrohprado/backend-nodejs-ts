import express = require('express');
import { Product } from '../models/Product';

//MVC - controllers
export const home = (req: express.Request, res: express.Response) => {
  res.render('home.mustache', {
    nome: 'pedro',
    produtos: Product.getAll(),
  });
};

export const contacts = (req: express.Request, res: express.Response) => {
  res.send('contatos');
};

export const about = (req: express.Request, res: express.Response) => {
  res.send('sobre');
};
