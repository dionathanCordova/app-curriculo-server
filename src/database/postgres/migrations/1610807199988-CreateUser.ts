import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1610807199988 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'users',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()'
               },
               {
                  name: 'name',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'avatar',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'whatsapp',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'bio',
                  type: 'text',
                  isNullable: true,
               },
               {
                  name: 'email',
                  type: 'varchar',
               },
               {
                  name: 'idade',
                  type: 'integer',
                  isNullable: true,
               },
               {
                  name: 'midias',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'genero',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'cidade',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'estado',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'bairro',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'password',
                  type: 'varchar',
               },
               {
                  name: 'password_reset_token',
                  type: 'varchar',
                  isNullable: true,
               },
               {
                  name: 'password_reset_expires',
                  type: 'timestamp with time zone',
                  isNullable: true,
               },
               {
                  name: 'last_login',
                  type: 'timestamp',
                  isNullable: true,
               },
               {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
               },
               {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
               },
            ]
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
   }

}
