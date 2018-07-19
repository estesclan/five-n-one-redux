const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ credentials: true }));
// load routes here
const colorRoutes = require("./routes/colors");
const starwarsRoutes = require("./routes/starwars");
const buzzwordsRoutes = require("./routes/buzzwords");
const fortunecookieRoutes = require("./routes/fortunecookie");
const emogeesRoutes = require("./routes/emogees");

app.get("/", (req, res) => res.send("5n1 API Server"));

colorRoutes(app);
starwarsRoutes(app);
buzzwordsRoutes(app);
fortunecookieRoutes(app);
emogeesRoutes(app);

app.listen(5000);
console.log("Server listening at 5000");
