import { Router } from 'express';

import userRoutes from './user.routes';
import authRoutes from './authenticate.routes';
import profissoesRouter from './profissoes.routes';
import escolaridadeRouter from './escolaridade.routes';
import experienciaRouter from './experiencia.routes';
import curriculoRouter from './curriculos.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/profissoes', profissoesRouter);
routes.use('/escolaridade', escolaridadeRouter);
routes.use('/experiencia', experienciaRouter);
routes.use('/curriculo', curriculoRouter);

export default routes;