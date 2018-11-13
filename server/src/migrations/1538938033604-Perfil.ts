import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Perfil1538938033604 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'login.perfis',
        columns: [
          {
            name: 'idPerfil',
            type: 'serial',
            isPrimary: true
          },
          {
            name: 'idAplicacao',
            type: 'int4',
            isNullable: false
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
          }
        ]
      })
    );

    await queryRunner.createForeignKey("login.perfis", new TableForeignKey({
        columnNames: ["idAplicacao"],
        referencedColumnNames: ["idAplicacao"],
        referencedTableName: "login.aplicacoes",
        onDelete: "NO ACTION"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable("login.perfis");
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("idAplicacao") !== -1)
    await queryRunner.dropForeignKey("login.perfis", foreignKey);
    await queryRunner.dropTable('login.perfis');
  }
}
