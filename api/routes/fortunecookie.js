const fortuneCookieObject = require("fortune-cookie");
const { map } = require("ramda");
const uuid = require("uuid");
//create fortune cookie document

const createFortune = fortune => ({
  id: uuid.v4(),
  name: fortune
});

const fortuneCookie = map(createFortune, fortuneCookieObject);

module.exports = app => {
  app.get("/fortunecookie", (req, res) => {
    res.send(fortuneCookie);
  });
};
