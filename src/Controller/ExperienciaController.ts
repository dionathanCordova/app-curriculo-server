import { Request, Response } from 'express';
import ExperienciaService from '../services/CreateExperienciaService';
import CreateCurriculoService from '../services/CreateCurriculoService';

export default class ExperienciaController {
   public async create(request: Request, response: Response): Promise<Response> {
      try {
         const { user_id } = request.params;
         const { experiencia, profissao_id } = request.body;

         // const experienciaService = new ExperienciaService();
         // const createExperiencia = await experienciaService.execute({experiencia, user_id, profissao_id});

         const curriculoService = new CreateCurriculoService();
         const createCurriculo = await curriculoService.execute({user_id, profissao_id});

         console.log(createCurriculo);
         return response.json(createCurriculo);
      } catch (error) {

         return response.json({status: 'error', message: error.message});
      }     
   }
}