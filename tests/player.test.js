let mongoose = require("mongoose");
let Player = require("../server/models/player");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server/server");
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("Players", () => {
  /*
   * Test the /GET route
   */
  describe("/GET player", () => {
    it("it should GET all the players", done => {
      chai
        .request(server)
        .get("/manage/players")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
  /*
   * Test the /POST route
   */
  describe("/POST player", () => {
    it("it should not POST a player without pages field", done => {
      let player = {
        fname: "Cristiano",
        lname: "Ronaldo",
        city: "Hospital Dr. Nélio Mendonça, Funchal",
        country: "Portugal",
        team: "Juventus FC",
        photo:
          "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2Fb994eef0529742a39ebbb68930f08c49%2F960x0.jpg%3Ffit%3Dscale"
      };
      chai
        .request(server)
        .post("/manage/player/add")
        .send(player)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
