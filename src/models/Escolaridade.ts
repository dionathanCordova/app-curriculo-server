import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./UserModel";

@Entity('escolaridade')
export default class EscolaridadeModel{
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   titulo: string;

   @Column()
   user_id: string;

   @ManyToOne(() => User, user => user.escolaridade)
   @JoinColumn({name: 'user_id'})
   user: User

   @Column()
   instituto: string;

   @Column()
   status: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}