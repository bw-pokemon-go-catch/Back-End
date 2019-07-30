const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getPokemon,
  findById
};

async function insert(pokemon) {
  return await db("pokemon").insert(pokemon, "id");
}

function update(id, changes) {
  return db("pokemon")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("pokemon")
    .where("id", id)
    .del();
}

function getPokemon() {
  return db("pokemon");
}

function findById(id) {
  return db("pokemon")
    .first()
    .where("pokemon.id", id);
}
