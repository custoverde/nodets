import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Usuario1541123270107 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'login.usuarios',
        columns: [
          {
            name: 'idLicenca',
            type: 'bigint'
          },
          {
            name: 'idUsuario',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '50'
          },
          {
            name: 'departamento',
            type: 'varchar',
            length: '30'
          },
          {
            name: 'email',
            type: 'varchar',
            length: '512'
          },
          {
            name: 'nomeAcesso',
            type: 'varchar',
            length: '30',
            isNullable: false
          },
          {
            name: 'senha',
            type: 'varchar',
            length: '32',
            isNullable: false
          },
          {
            name: 'dataExpiraSenha',
            type: 'date',
            isNullable: false
          },
          {
            name: 'dataCadastro',
            type: 'date',
            isNullable: false
          },
          {
            name: 'ativo',
            type: 'boolean',
            isNullable: false
          },
          {
            name: 'forcaSenha',
            type: 'int'
          },
          {
            name: 'tipoUsuario',
            type: 'varchar'
          },
          {
            name: 'dataNascimento',
            type: 'date',
            isNullable: false
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'login.usuarios',
      new TableForeignKey({
        columnNames: ['idLicenca'],
        referencedColumnNames: ['idLicenca'],
        referencedTableName: 'login.licencas',
        onDelete: 'NO ACTION'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable('login.usuarios');

    const foreignKeyLicenca = table.foreignKeys.find(
      fk => fk.columnNames.indexOf('idLicenca') !== -1
    );
    await queryRunner.dropForeignKey('login.usuarios', foreignKeyLicenca);

    await queryRunner.dropTable('login.usuarios');
  }
}
