import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema
        .createTable("users", table => {
            table.integer("id").primary();
            table.string("name");
            table.integer("age");
        });
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("users");
};

