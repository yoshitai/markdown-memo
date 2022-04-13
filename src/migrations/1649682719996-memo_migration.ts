import {MigrationInterface, QueryRunner} from "typeorm";

export class memoMigration1649682719996 implements MigrationInterface {
    name = 'memoMigration1649682719996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "memo" ("title" character varying(50) NOT NULL, "content" character varying NOT NULL, "ins_ts" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_06d8c7487f1b584180b392f529b" PRIMARY KEY ("title")); COMMENT ON COLUMN "memo"."ins_ts" IS '登録日時'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "memo"`);
    }

}
