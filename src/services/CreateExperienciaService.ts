import { getRepository } from "typeorm";
import User from "../models/UserModel";
import ExperienciaModel from "../models/Experiencia";
import Profissoes from "../models/Profissoes";

interface ExperienciaProps {
   experiencia: {
      cargo: string;
      empresa: string;
      atribuicoes: string;
      ferramentas: string;
      salario_final: string;
      data_fim: Date;
      data_inicio: Date;
      atual?: boolean;
   }[];
   user_id: string;
   profissao_id: string
}

export default class ExperienciaService {
   public async execute({experiencia, user_id, profissao_id}:ExperienciaProps): Promise<any> {

      const userRepository = getRepository(User);
      const findUser = await userRepository.findOne({ where: { id: user_id } });

      if (!findUser) {
         throw new Error('User does not exists')
      }

      const profissaoRepository = getRepository(Profissoes);
      const profissao = await profissaoRepository.findOne({where: {id: profissao_id}})

      if(!profissao) {
         throw new Error('Profissao does not exists')
      }

      const experienciaRepository = getRepository(ExperienciaModel);

      var cadastro = true;
      experiencia.map(exp => {
         const experiencia = experienciaRepository.create({
            cargo: exp.cargo,
            atribuicoes: exp.atribuicoes,
            empresa: exp.empresa,
            remuneracao: exp.salario_final,
            data_fim: exp.data_fim,
            data_inicio: exp.data_inicio,
            atual: exp.atual,
            ferramentas: exp.ferramentas,
            user: findUser,
            profissao
         });

         experienciaRepository.save(experiencia).then(response => {
         }).catch(err => {
            cadastro = false;
         });
      })

      return cadastro;
   }
}