const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users");
}
async function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      return db("users")
        .where({ id: ids[0] })
        .first();
    });
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
