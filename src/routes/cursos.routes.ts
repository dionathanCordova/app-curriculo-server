import { Router } from 'express';

import CursosController from '../Controller/CursosController';
const cursosController = new CursosController();

const cursosRouter = Router();

cursosRouter.get('/', cursosController.index);
cursosRouter.post('/create/:user_id', cursosController.create);

export default cursosRouter;