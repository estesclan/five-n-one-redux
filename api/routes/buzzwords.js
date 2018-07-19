const buzzwordsObj = require("buzzwords");
const { map } = require("ramda");
const uuid = require("uuid");
//create buzzwords document
const createBuzzword = word => ({
  id: uuid.v4(),
  name: word
});

const buzzwords = map(createBuzzword, buzzwordsObj);

//"app" is same as "express" see server.js
module.exports = app => {
  app.get("/buzzwords", (req, res) => {
    res.send(buzzwords);
  });
};
