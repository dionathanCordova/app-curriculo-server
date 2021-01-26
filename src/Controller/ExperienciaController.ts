import { Request, Response } from 'express';
import ExperienciaService from '../services/CreateExperienciaService';
import { Repository } from "typeorm";

export default class ExperienciaController {
   public async create(request: Request, response: Response): Promise<Response> {
      try {
         const { user_id } = request.params;
         const { experiencia } = request.body;

         const experienciaService = new ExperienciaService();
         const createExperiencia = await experienciaService.execute({experiencia, user_id});

         return response.json(createExperiencia);
      } catch (error) {
         return response.json({message: error.nessage});
      }     
   }
}