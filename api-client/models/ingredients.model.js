const sql = require("./db.js");

// constructor
const Ingredient = function(menu_item) {
  this.id = menu_item.id;
  this.name = menu_item.name;
  this.description = menu_item.description;
  this.price = menu_item.price;
};


Ingredient.findById = (ingredient_id, result) => {
  sql.query(`SELECT * FROM ingredients WHERE id = ${ingredient_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found ingredient: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Ingredient.getAll = result => {
  sql.query("SELECT * FROM ingredients", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("ingredients: ", res);
    result(null, res);
  });
};

module.exports = Ingredient;