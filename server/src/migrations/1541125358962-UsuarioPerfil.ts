import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class UsuarioPerfil1541125358962 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'login.usuarioperfil',
        columns: [
          {
            name: 'idUsuario',
            type: 'int4',
            isPrimary: true
          },
          {
            name: 'idPerfil',
            type: 'int4',
            isPrimary: true
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'login.usuarioperfil',
      new TableForeignKey({
        columnNames: ['idUsuario'],
        referencedColumnNames: ['idUsuario'],
        referencedTableName: 'login.usuarios',
        onDelete: 'NO ACTION'
      })
    );

    await queryRunner.createForeignKey(
      'login.usuarioperfil',
      new TableForeignKey({
        columnNames: ['idPerfil'],
        referencedColumnNames: ['idPerfil'],
        referencedTableName: 'login.perfis',
        onDelete: 'NO ACTION'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable("login.usuarioperfil");

    const foreignKeyPermissao = table.foreignKeys.find(fk => fk.columnNames.indexOf("idUsuario") !== -1)
    await queryRunner.dropForeignKey("login.usuarioperfil", foreignKeyPermissao);

    const foreignKeyPerfil = table.foreignKeys.find(fk => fk.columnNames.indexOf("idPerfil") !== -1)
    await queryRunner.dropForeignKey("login.usuarioperfil", foreignKeyPerfil);

    await queryRunner.dropTable('login.usuarioperfil');
  }
}
