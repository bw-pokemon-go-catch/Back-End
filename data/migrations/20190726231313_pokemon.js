exports.up = function(knex) {
    return knex.schema.exports("pokemon", tbl => {
      tbl.increments();
  
      tbl
        .string("Pokemon No.", 256)
        .notNullable()
        .unique();
  
      tbl.string("Name", 300).notNullable();
      tbl.string("Type 1", 300).notNullable();
      tbl.string("Type 2", 300)
      tbl.string("Max CP", 300).notNullable();
      tbl.string("Max HP", 300).notNullable();
      tbl.string("Image URL", 500).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("pokemon");
  };