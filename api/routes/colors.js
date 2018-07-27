const csscolorsObj = require("css-color-names");
const {
  map,
  keys,
  prop,
  isNil,
  append,
  find,
  reject,
  compose,
  equals,
  propEq
} = require("ramda");
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
      res
        .status(500)
        .send({ ok: false, message: "Ain't nuttin in ur dern post!" });
      return;
    }
    req.body.id = uuid.v4();
    colors = append(req.body, colors);
    res.send({ ok: true });
  });
  app.get("/colors/:id", (req, res) => {
    console.log(
      "filter results:",
      find(color => color.id === req.params.id, colors)
    );
    res.send(find(color => color.id === req.params.id, colors));
  });

  app.delete("/colors/:id", (req, res) => {
    console.log("id in the route", req.params.id);
    colors = reject(
      compose(
        equals(req.params.id),
        prop("id")
      ),
      colors
    );
    res.send({ ok: true });
  });

  app.put("/colors/:id", bodyParser.json(), (req, res) => {
    if (!req.body) {
      return res
        .status(500)
        .send({ ok: false, message: "Color Object Required" });
    }
    colors = map(
      color => (propEq("id", req.params.id, color) ? req.body : color),
      colors
    );
    res.send({ ok: true });
  });
};
