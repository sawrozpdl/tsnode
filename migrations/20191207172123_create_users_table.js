exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.integer("id").primary();
      table.string("name");
      table.integer("age");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
