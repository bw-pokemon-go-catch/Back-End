exports.up = function(knex) {
  return knex.schema.exports("users", tbl => {
    tbl.increments();

    tbl
      .string("username", 256)
      .notNullable()
      .unique();

    tbl.string("password", 300).notNullable();
    tbl.string("email", 300).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
