const supertest = require("supertest");
const server = require("../api/server");

describe("server", () => {
  describe("GET /", () => {
    it("responds with 200 OK", () => {
      supertest(server)
        .get("/users")
        .expect(200);
    });

    it("responds with json content-type", async () => {
      await supertest(server)
        .get("/users")
        .expect("Content-Type", /json/i);
    });
  });
});
