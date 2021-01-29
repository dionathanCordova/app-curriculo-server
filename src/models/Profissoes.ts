import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./UserModel";

@Entity('profissoes')
export default class Profissoes {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   icon_path: string;

   // @Column()
   // user_id: string;

   // @ManyToOne(() => User, user => user.experiencia)
   // @JoinColumn({name: 'user_id'})
   // user: User

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}