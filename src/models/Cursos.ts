import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cursos')
export default class Cursos {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   nome: string;

   @Column()
   user_id: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}