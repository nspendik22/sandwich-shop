const sql = require("./db.js");

// constructor
const Recipe = function(rec_item) {
  this.count = rec_item.count;
  this.unit = rec_item.unit;
  this.name = rec_item.name;
};

/**
 * Query the MySQL database to find a recipe by a given menu item ID
 *
 * @param sandwich_id
 * @param result
 */

Recipe.findById = (sandwich_id, result) => {
  sql.query(`select r.count, i.unit, i.name from recipies r inner join menu_items m on r.menu_id = m.id inner join ingredients i on r.ingredient_id = i.id where m.id = ${sandwich_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found recipe: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = Recipe;