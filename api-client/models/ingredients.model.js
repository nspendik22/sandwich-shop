const sql = require("./db.js");

// constructor
const Ingredient = function(ingredient) {
  this.id = ingredient.id;
  this.name = ingredient.name;
  this.unit = ingredient.unit;
};

/**
 * Query the MySQL database to create an ingredient
 *
 * @param newIngredient
 * @param result
 */

Ingredient.create = (newIngredient, result) => {
  sql.query("INSERT INTO ingredients SET ?", newIngredient, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created a menu item: ", { id: res.insertId, ...newIngredient });
    result(null, { id: res.insertId, ...newIngredient });
  });
};

/**
 * Query the MySQL database to find an ingredient by a given ID
 *
 * @param ingredient_id
 * @param result
 */

Ingredient.findById = (ingredient_id, result) => {
  sql.query(`SELECT * FROM ingredients WHERE id = ${ingredient_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Found an ingredient: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

/**
 * Query the MySQL database to return all of the ingredients
 *
 * @param result
 */

Ingredient.getAll = result => {
  sql.query("SELECT * FROM ingredients", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Ingredients: ", res);
    result(null, res);
  });
};

/**
 * Query the MySQL database to bring back the items whose name contains the value passed in the query parameter
 *
 * @param query
 * @param result
 */

Ingredient.searchItems = (query, result) => {
  sql.query(`SELECT * FROM ingredients WHERE name like '%${query}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`Search results for: ${query}`, res);
    result(null, res);
  });
}

module.exports = Ingredient;