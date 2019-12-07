exports.up = function(knex) {
  knex.schema
    .createTable("users", table => {
      table.integer("id");
      table.string("name");
      table.integer("age");
    })
    .then(success => console.log(success))
    .catch(error => console.log(error));
};

exports.down = function(knex) {
  knex.schema.dropTable("users");
};
