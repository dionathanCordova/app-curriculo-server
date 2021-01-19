import { Router } from 'express';

import EscolaridadeController from '../Controller/EscolaridadeController';
const escolaridade = new EscolaridadeController();

const escolaridadeRoute = Router();

escolaridadeRoute.get('/', escolaridade.index);
escolaridadeRoute.get('/user/:user_id', escolaridade.findByUser)
escolaridadeRoute.post('/create/:user_id', escolaridade.create)

export default escolaridadeRoute;