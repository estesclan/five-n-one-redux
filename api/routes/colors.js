const csscolorsObj = require("css-color-names");
const { map, keys, prop, isNil, append } = require("ramda");
const uuid = require("uuid");
const bodyParser = require("body-parser");
// create color document
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
});

let colors = map(createColor, keys(csscolorsObj));

//"app" is same as "express" see server.js
module.exports = app => {
  app.get("/colors", (req, res) => {
    res.send(colors);
  });
  app.post("/colors", bodyParser.json(), (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({ ok: false, message: "whatever" });
      return;
    }
    req.body.id = uuid.v4();
    colors = append(req.body, colors);
    res.send({ ok: true });
  });
};
