exports.up = function(knex) {
  return knex.schema.createTable("pokemon", tbl => {
    tbl.increments();

    tbl
      .string("PokemonNo", 256)
      .notNullable()
      .unique();

    tbl.string("Name", 300).notNullable();
    tbl.string("Type1", 300).notNullable();
    tbl.string("Type2", 300);
    tbl.integer("MaxCP", 300).notNullable();
    tbl.integer("MaxHP", 300).notNullable();
    tbl.string("ImageURL", 500).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("pokemon");
};
