import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Licenca1538826484377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'login.licencas',
        columns: [
          {
            name: 'idLicenca',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'cnpjCpf',
            type: 'varchar',
            length: '14',
            isUnique: true,
            isNullable: false
          },
          {
            name: 'dataCadastro',
            type: 'timestamp'
          }
          ,
          {
            name: 'validoAte',
            type: 'timestamp'
          }
        ]
      })
    );

  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("login.licencas");
  }
}
