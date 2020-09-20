const sql = require("./db.js");

// constructor
const Menu_Item = function(menu_item) {
  this.id = menu_item.id;
  this.name = menu_item.name;
  this.description = menu_item.description;
  this.price = menu_item.price;
};


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

module.exports = Menu_Item;