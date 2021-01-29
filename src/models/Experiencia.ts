import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Profissoes from "./Profissoes";

import User from './UserModel';

@Entity('experiencia')
export default class ExperienciaModel {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   cargo: string;

   @Column()
   user_id: string;

   @Column()
   profissao_id: string;

   @Column()
   empresa: string;

   @Column()
   atribuicoes: string;

   @Column()
   ferramentas: string;

   @Column()
   remuneracao: string;

   @Column()
   data_inicio: Date;

   @Column()
   data_fim: Date;

   @Column()
   atual: boolean;

   @ManyToOne(() => User, user => user.experiencia)
   @JoinColumn({name: 'user_id'})
   user: User;

   @ManyToOne(() => Profissoes, profissoes => profissoes.id)
   @JoinColumn({name: 'profissao_id'})
   profissao: Profissoes;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}