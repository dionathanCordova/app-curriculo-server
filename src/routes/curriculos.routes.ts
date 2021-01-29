import { Router } from 'express';

import CurriculoController from '../Controller/CurriculoController';
const curriculoController = new CurriculoController();

const curriculoRoutes = Router();

curriculoRoutes.get('/', curriculoController.index);
curriculoRoutes.get('/user/:user_id', curriculoController.userCurriculos);

export default curriculoRoutes;