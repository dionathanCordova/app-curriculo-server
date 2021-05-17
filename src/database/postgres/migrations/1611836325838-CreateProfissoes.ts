import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfissoes1611836325838 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'profissoes',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  generationStrategy: 'uuid',
                  isPrimary: true,
                  default: 'uuid_generate_v4()'
               },
               {
                  name: 'name',
                  type: 'varchar'
               },
               {
                  name: 'icon_path',
                  type: 'varchar',
                  isNullable: true
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
            ],
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('profissoes');
   }

}
