import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Cursos from '../models/Cursos';
import CreateCursosService from '../services/CreateCursosService';

export default class CursosController {
   public async index(request: Request, response: Response): Promise<Response> {
      const cursosRepository = getRepository(Cursos);

      const findCursos = await cursosRepository.find();

      return response.json(findCursos);
   }

   public async create(request: Request, response: Response): Promise<Response> {
      try {
         const { user_id } = request.params;
         const [ cursos ] = request.body;
         
         const cursosService = new CreateCursosService();
         const create = await cursosService.execute({user_id, cursos});
         
         return response.json(create);
         
      } catch (error) {
         return response.json({message: error.nessage});
      }
   }
}