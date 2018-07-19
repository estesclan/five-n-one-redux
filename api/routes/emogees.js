const emogeeObj = require("emojis-list");
const { map } = require("ramda");
const uuid = require("uuid");
// create emogee document

const createEmogee = emogee => ({
  id: uuid.v4(),
  name: emogee
});

const emogees = map(createEmogee, emogeeObj);

module.exports = app => {
  app.get("/emogees", (req, res) => {
    res.send(emogees);
  });
};
