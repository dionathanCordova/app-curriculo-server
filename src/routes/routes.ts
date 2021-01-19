import { Router } from 'express';

import userRoutes from './user.routes';
import authRoutes from './authenticate.routes';
import profissoesRouter from './profissoes.routes';
import escolaridadeRouter from './escolaridade.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);
routes.use('/profissoes', profissoesRouter);
routes.use('/escolaridade', escolaridadeRouter)

export default routes;