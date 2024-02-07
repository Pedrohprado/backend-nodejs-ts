import express = require('express');
import { home, contacts, about } from '../controllers/homeController';

const router = express.Router();

router.get('/', home);
router.get('/contato', contacts);
router.get('/sobre', about);

export default router;
