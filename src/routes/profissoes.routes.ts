import { Router } from 'express';

import ProfissoesController from '../Controller/ProfissoesController';
const profissoesController = new ProfissoesController();

const profissoes = Router();

profissoes.get('/', profissoesController.index);
profissoes.post('/create', profissoesController.create);

export default profissoes;