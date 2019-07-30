const db = require("../data/dbConfig.js");
const request = require("supertest");
const server = require("../api/server.js");

const {
  insert,
  update,
  remove,
  getPokemon,
  findById
} = require("./pokemonModel.js");
const { add, find } = require("../users/usersModel.js");

describe("pokemon", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await db("pokemon").truncate();
  });
  describe("Gets the pokemon from the API", () => {
    it("responds with 200 OK", () => {
      request(server)
        .get("/pokemon")
        .expect(200);
    });

    it("expect json content-type", async () => {
      await request(server)
        .get("/pokemon")
        .expect("Content-Type", /json/i);
    });
  });

  describe("Post ", () => {
    it("posts a new pokemon to the db", async () => {
      await insert({
        PokemonNo: "008",
        Name: "Wartortle",
        Type1: "Water",
        Type2: "",
        MaxCP: 1594,
        MaxHP: 105,
        ImageURL:
          "http://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png"
      });

      const rest = await db("pokemon");
      expect(rest).toHaveLength(1);
    });
  });

  describe("Post ", () => {
    it("updates a pokemon on the db", async () => {
      request(server)
        .put("pokemon/1")
        .send({
          PokemonNo: "008",
          Name: "Wartortle",
          Type1: "Water",
          Type2: "",
          MaxCP: 1594,
          MaxHP: 105,
          ImageURL:
            "http://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png"
        })
        .expect(200);
    });
  });

  describe("Delete", () => {
    it("deletes a pokemon from the db", () => {
      request(server)
        .del("pokemon/1")
        .expect(204);
    });
  });
});
