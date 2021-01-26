import { Response, Request } from 'express';

import Escolaridade from "../models/Escolaridade";
import { getRepository } from "typeorm";

import CreateEscolaridadeService from '../services/CreateEscolaridadeService';

export default class EscolaridadeController{
   public async index(request: Request, response: Response): Promise<Response>{
      const escolaridadeRepository = getRepository(Escolaridade);

      const escolaridade = await escolaridadeRepository.find();

      return response.json(escolaridade);
   }

   public async findByUser(request: Request, response: Response): Promise<Response> {
      const { user_id } = request.params;

      const escolaridadeRepository = getRepository(Escolaridade);

      const escolaridade = await escolaridadeRepository.findOne({where : {user_id}});

      return response.json(escolaridade);
   }

   public async create(request: Request, response: Response): Promise<Response> {
      try {
         const { user_id } = request.params;
         const { escolaridade } = request.body;
         
         const createEscolaridadeService = new CreateEscolaridadeService();
         const createEscolaridade = await createEscolaridadeService.execute({escolaridade, user_id});
         
         return response.json(createEscolaridade);
         
      } catch (error) {
         return response.json({message: error.nessage});
      }
   }
}