const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

app.use(cors());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sandwich shop." });
});

require("./routes/menu_item.routes.js")(app);
require("./routes/ingredients.routes.js")(app);
require("./routes/recipies.routes.js")(app);

// set port, listen for requests

app.listen(3001, () => {
  console.log('Server started on port 3001 | 8080 if running on docker...');
});

