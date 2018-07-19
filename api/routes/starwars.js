const starWarsObj = require("starwars-names");
const { map, keys, split, slice, prop } = require("ramda");
const uuid = require("uuid");
//create starwars document
const createCharacterName = characterName => ({
  id: uuid.v4(),
  name: characterName
});

const starwars = map(createCharacterName, starWarsObj.all);

//"app" is same as "express" see server.js
module.exports = app => {
  app.get("/starwars", (req, res) => {
    res.send(starwars);
  });
};
