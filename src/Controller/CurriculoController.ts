import { Request, Response } from 'express';
import Profissoes from 'models/Profissoes';
import { getRepository } from 'typeorm';
import Curriculos from '../models/Curriculos';

export default class CurriculoController{
   public async index(request: Request, response: Response): Promise<Response> {
      const curriculoRepository = getRepository(Curriculos);
      const curriculo = await curriculoRepository.find();

      return response.json(curriculo);
   }

   public async userCurriculos(request: Request, response: Response): Promise<Response> {
      const { user_id } = request.params;
      
      const curriculoRepository = getRepository(Curriculos);
      const curriculosUser = await curriculoRepository.find(
         {
            where: {user_id},
            relations: ['profissao'],
         },
      );

      console.log(curriculosUser);
      return response.json(curriculosUser);
   }
}