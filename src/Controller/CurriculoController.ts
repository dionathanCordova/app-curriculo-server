import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import ExperienciaModel from '../models/Experiencia';
import Profissoes from '../models/Profissoes';
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

      return response.json(curriculosUser);
   }

   public async removeCurriculo(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;
      
      const curriculoRepository = getRepository(Curriculos);
      const findCurridulo = await curriculoRepository.findOne(id);

      const experiencieRepository = getRepository(ExperienciaModel);
      const findExperiencia = await experiencieRepository.findOne({where: {
         profissao_id: findCurridulo?.profissao_id,
         user_id: findCurridulo?.user_id
      }})

      console.log(findExperiencia);

      // if(findExperiencia) {
      //    await experiencieRepository.delete(findExperiencia.id);
      // }

      // await curriculoRepository.delete(id);

      return response.json({status: 'ok'})
   }
}