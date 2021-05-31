import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1622496247760 implements MigrationInterface {
    name = 'myInit1622496247760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "track" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "title" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, "image" character varying(300) NOT NULL, "price" numeric NOT NULL, "file" character varying(300) NOT NULL, CONSTRAINT "PK_0631b9bcf521f8fab3a15f2c37e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "track"`);
    }

}
