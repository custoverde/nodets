import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { TableUnique } from 'typeorm/schema-builder/table/TableUnique';

export class Permissao1539049985717 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'login.permissoes',
        columns: [
          {
            name: 'idPermissao',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'idPermissaoPai',
            type: 'int4',
            isNullable: true
          },
          {
            name: 'idAplicacao',
            type: 'int4'
          },
          {
            name: 'titulo',
            type: 'varchar',
            length: '20'
          },
          {
            name: 'descricao',
            type: 'varchar',
            length: '100'
          },
          {
            name: 'ativa',
            type: 'boolean'
          },
        ]
      })
    );

    await queryRunner.createUniqueConstraint("login.permissoes", new TableUnique({
        name: "login_permissoes_idx_permissoes",
        columnNames: ["idPermissao", "idPermissaoPai"]
    }));

    await queryRunner.createForeignKey("login.permissoes", new TableForeignKey({
        columnNames: ["idPermissaoPai"],
        referencedColumnNames: ["idPermissao"],
        referencedTableName: "login.permissoes",
        onDelete: "NO ACTION"
    }));

    await queryRunner.createForeignKey("login.permissoes", new TableForeignKey({
        columnNames: ["idAplicacao"],
        referencedColumnNames: ["idAplicacao"],
        referencedTableName: "login.aplicacoes",
        onDelete: "NO ACTION"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable("login.permissoes");

    const foreignKeyPermissao = table.foreignKeys.find(fk => fk.columnNames.indexOf("idPermissaoPai") !== -1)
    await queryRunner.dropForeignKey("login.permissoes", foreignKeyPermissao);

    const foreignKeyAplicacao = table.foreignKeys.find(fk => fk.columnNames.indexOf("idAplicacao") !== -1)
    await queryRunner.dropForeignKey("login.permissoes", foreignKeyAplicacao);

    table.removeUniqueConstraint(new TableUnique({
        name: "login_permissoes_idx_permissoes",
        columnNames: ["idPermissao", "idPermissaoPai"]
    }));

    await queryRunner.dropTable('login.permissoes');
  }
}
