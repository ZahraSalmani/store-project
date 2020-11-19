import {MigrationInterface, QueryRunner} from "typeorm";

export class CuTable1605806953482 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("customer", "phoneNumber", "tel");

    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("customer", "tel", "phoneNumber");
    }


}
