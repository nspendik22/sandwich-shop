const sql = require("./db.js");

// constructor
const Menu_Item = function(menu_item) {
  this.id = menu_item.id;
  this.name = menu_item.name;
  this.description = menu_item.description;
  this.price = menu_item.price;
};

/**
 * Query the MySQL database to create a menu item
 *
 * @param newMenuItem
 * @param result
 */

Menu_Item.create = (newMenuItem, result) => {
  sql.query("INSERT INTO menu_items SET ?", newMenuItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created menu item: ", { id: res.insertId, ...newMenuItem });
    result(null, { id: res.insertId, ...newMenuItem });
  });
};

/**
 * Query the MySQL database to find a menu item by a given ID
 *
 * @param menu_item_id
 * @param result
 */

Menu_Item.findById = (menu_item_id, result) => {
  sql.query(`SELECT * FROM menu_items WHERE id = ${menu_item_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found sandwich: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

/**
 * Query the MySQL database to return all of the menu items
 *
 * @param result
 */

Menu_Item.getAll = result => {
  sql.query("SELECT * FROM menu_items", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sandwiches: ", res);
    result(null, res);
  });
};

/**
 * Query the MySQL database to bring back the items whose name contains the value passed in the query parameter
 *
 * @param query
 * @param result
 */

Menu_Item.searchItems = (query, result) => {
  sql.query(`SELECT * FROM menu_items WHERE name like '%${query}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`Search results for: ${query}`, res);
    result(null, res);
  });
}

module.exports = Menu_Item;