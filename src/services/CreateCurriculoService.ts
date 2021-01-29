import Curriculo from "../models/Curriculos";
import { getRepository } from "typeorm";
import Profissoes from "../models/Profissoes";
import User from "../models/UserModel";

interface CurriculoParams {
   user_id: string;
   profissao_id: string;
}

interface ProfissoesProps {
   id: string;
   name: string;
   icon_path: string;
}


interface CurriculoProps {
   id: string;
   user_id: string;
   profissao_id: string;
   profissao: ProfissoesProps
}


export default class CreateCurriculoService{
   public async execute({ profissao_id, user_id }: CurriculoParams): Promise<CurriculoProps> {

      const curriculoRepository = getRepository(Curriculo);
      const findProfissaoCurriculo = await curriculoRepository.findOne(profissao_id);

      if(findProfissaoCurriculo) {
         throw new Error('Esta profissão já possui curriculo cadastrado');
      }

      const profissaoRepository = getRepository(Profissoes);
      const profissao = await profissaoRepository.findOne({where: {id: profissao_id}});

      if(!profissao) {
         throw new Error('Esta profissão não existe em nosso cadastro');
      }

      const userRepository = getRepository(User);
      const user = await userRepository.findOne({where: {id: user_id}});

      if(!user) {
         throw new Error('Este usuário não existe');
      }

      const createCurriculo = curriculoRepository.create({
         profissao_id,
         user_id,
         profissao,
      })

      await curriculoRepository.save(createCurriculo);

      return createCurriculo;
   }
}