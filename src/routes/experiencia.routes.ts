import { Router } from 'express';

import ExperienciaController from '../Controller/ExperienciaController';
const experienciaController = new ExperienciaController();

const experienciaRoutes = Router();

experienciaRoutes.post('/create/:user_id', experienciaController.create);

export default experienciaRoutes;