const db = require("../data/dbConfig.js");
const request = require("supertest");
const server = require("../api/server.js");

const { add, find } = require("../users/usersModel.js");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("add()", () => {
    it("should add user to db", async () => {
      await add({ username: "quincy", password: "qqq", email: "qqq" });

      const user = await db("users");

      expect(user).toHaveLength(1);
    });
  });

  describe("logging in", () => {
    it("should return 200 when user logins in after registering", async () => {
      const creds = { username: "quincy", password: "qqq", email: "qqq" };
      const logCreds = { username: "quincy", password: "qqq" };

      let res = await request(server)
        .post("/auth/register")
        .send(creds);

      expect(res.status).toBe(200);

      let login = await request(server)
        .post("/auth/login")
        .send(logCreds);

      expect(login.status).toBe(200);
    });

    it("should return a 200 on login ", async () => {
      return request(server)
        .post("/auth/register")
        .send({ username: "quincy", password: "qqq", email: "qqq" })
        .expect(200);
    });
  });
});
