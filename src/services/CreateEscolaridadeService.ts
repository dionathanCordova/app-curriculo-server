import EscolaridadeModel from "../models/Escolaridade";
import User from "../models/UserModel";
import { getRepository } from "typeorm";

interface EscolaridadeProps {
   escolaridade: { 
      instituicao: string;
      curso: string;
      situacao: string;
      user_id: string;
   }[];
   user_id: string;
}

export default class CreateEscolaridadeService {
   public async execute({ escolaridade, user_id }: EscolaridadeProps): Promise<any> {

      const userRepository = getRepository(User);
      const findUser = await userRepository.findOne({ where: { id: user_id } });

      if (!findUser) {
         throw new Error('User does not exists')
      }

      const escolaridadeRepository = getRepository(EscolaridadeModel);

      var cadastro = true;
      escolaridade.map(esc => {
         const escolaridade = escolaridadeRepository.create({
               instituto: esc.instituicao,
               status: esc.situacao,
               titulo: esc.curso,
               user: findUser
            });

         escolaridadeRepository.save(escolaridade).then(response => {
         }).catch(err => {
            cadastro = false;
         });
      })

      return cadastro;
   }
}