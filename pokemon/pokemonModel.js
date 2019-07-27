const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getPokemon,
  findById
};

async function insert(pokemon) {
  return db("pokemon").insert(pokemon, "id");
}

async function update(id, changes) {
  return null;
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
  return null;
}
