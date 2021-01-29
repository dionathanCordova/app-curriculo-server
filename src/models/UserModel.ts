import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   UpdateDateColumn,
   CreateDateColumn,
   OneToMany,
} from 'typeorm';
import Curriculo from './Curriculos';

import Escolaridade from './Escolaridade';
import Experiencia from './Experiencia';
import Profissoes from './Profissoes';

@Entity('users')
export default class User {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   email: string;

   @Column()
   password: string;

   @Column()
   whatsapp: string;

   @Column()
   bio: string;

   @Column()
   avatar: string;

   @Column()
   idade: string;

   @Column()
   midias: string;

   @Column()
   genero: string;

   @Column()
   cidade: string;

   @Column()
   estado: string;

   @Column()
   bairro: string;

   @Column()
   password_reset_token: string;

   @Column()
   password_reset_expires: Date;

   @OneToMany(() => Escolaridade, escolaridade => escolaridade.user)
   escolaridade: Escolaridade[];

   @OneToMany(() => Experiencia, experiencia => experiencia.user)
   experiencia: Experiencia[];

   @OneToMany(() => Profissoes, profissao => profissao.id)
   profissoes: Profissoes[];

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;

   @Column()
   last_login: Date;
}