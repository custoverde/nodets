import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class PerfilPermissao1539968343906 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'login.perfilpermissao',
        columns: [
          {
            name: 'idPerfil',
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

    await queryRunner.createForeignKey("login.perfilpermissao", new TableForeignKey({
      columnNames: ["idPerfil"],
      referencedColumnNames: ["idPerfil"],
      referencedTableName: "login.perfis",
      onDelete: "NO ACTION"
    }));

    await queryRunner.createForeignKey("login.perfilpermissao", new TableForeignKey({
      columnNames: ["idPermissao"],
      referencedColumnNames: ["idPermissao"],
      referencedTableName: "login.permissoes",
      onDelete: "NO ACTION"
    }));

  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable("login.perfilpermissao");

    const foreignKeyPermissao = table.foreignKeys.find(fk => fk.columnNames.indexOf("idPermissao") !== -1)
    await queryRunner.dropForeignKey("login.perfilpermissao", foreignKeyPermissao);

    const foreignKeyPerfil = table.foreignKeys.find(fk => fk.columnNames.indexOf("idPerfil") !== -1)
    await queryRunner.dropForeignKey("login.perfilpermissao", foreignKeyPerfil);

    await queryRunner.dropTable('login.perfilpermissao');
  }

}
