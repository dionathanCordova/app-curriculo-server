import Cursos from "../models/Cursos";
import User from "../models/UserModel";
import { getRepository } from "typeorm";

interface CursosProps {
   user_id: string;
   cursos: {
      nome: string;
      user_id: string;
   }[];
}

export default class CreateCurriculoService {
   public async execute({user_id, cursos}: CursosProps): Promise<any> {
      const userRepository = getRepository(User);
      const findUser = await userRepository.findOne({ where: { id: user_id } });

      if (!findUser) {
         throw new Error('User does not exists')
      }
      
      const cursosRepository = getRepository(Cursos);

      var cadastro = true;
      cursos.map(cur => {
         const findCurso = cursosRepository.findOne({where: {nome: cur.nome}}).then(response => {
            console.log(response);
         });
         // const createCursos = cursosRepository.create({
         //    nome: cur.nome,
         //    user_id: cur.user_id
         // });

         // cursosRepository.save(createCursos).then().catch(err => cadastro = false);
      })

      return cadastro;
   }
}