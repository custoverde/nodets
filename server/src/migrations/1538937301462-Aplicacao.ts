import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Aplicacao1538937301462 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
              name: 'login.aplicacoes',
              columns: [
                {
                  name: 'idAplicacao',
                  type: 'serial',
                  isPrimary: true
                },
                {
                  name: 'nome',
                  type: 'varchar',
                  isNullable: false
                },
                {
                  name: 'chaveAutorizacao',
                  type: 'varchar',
                  length: "32"
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("login.aplicacoes");
    }

}
