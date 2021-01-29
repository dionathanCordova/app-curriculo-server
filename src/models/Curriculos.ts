import profissoes from "routes/profissoes.routes";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Profissoes from "./Profissoes";
import User from "./UserModel";

@Entity('curriculos')
export default class Curriculo{
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   user_id: string;

   @Column()
   profissao_id: string;

   @ManyToOne(() => Profissoes)
   @JoinColumn({name: 'id'})
   profissao: Profissoes;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}