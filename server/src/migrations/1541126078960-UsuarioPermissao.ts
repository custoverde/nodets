import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class UsuarioPermissao1541126078960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'login.usuariopermissao',
        columns: [
          {
            name: 'idUsuario',
            type: 'int4',
            isPrimary: true
          },
          {
            name: 'idPermissao',
            type: 'int4',
            isPrimary: true
          },
          {
            name: 'tipo',
            type: 'bpchar[]'
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'login.usuariopermissao',
      new TableForeignKey({
        columnNames: ['idUsuario'],
        referencedColumnNames: ['idUsuario'],
        referencedTableName: 'login.usuarios',
        onDelete: 'NO ACTION'
      })
    );

    await queryRunner.createForeignKey(
      'login.usuariopermissao',
      new TableForeignKey({
        columnNames: ['idPermissao'],
        referencedColumnNames: ['idPermissao'],
        referencedTableName: 'login.permissoes',
        onDelete: 'NO ACTION'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable("login.usuariopermissao");

    const foreignKeyPermissao = table.foreignKeys.find(fk => fk.columnNames.indexOf("idPermissao") !== -1)
    await queryRunner.dropForeignKey("login.usuariopermissao", foreignKeyPermissao);

    const foreignKeyPerfil = table.foreignKeys.find(fk => fk.columnNames.indexOf("idUsuario") !== -1)
    await queryRunner.dropForeignKey("login.usuariopermissao", foreignKeyPerfil);

    await queryRunner.dropTable('login.usuariopermissao');
  }
}
