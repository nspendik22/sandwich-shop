const Menu_Item = require("../models/menu_item.model.js");

/**
 * Creates a menu items and stores it in the MySQL database
 *
 * @param req
 * @param res
 */

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const menu_item = new Menu_Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });

  // Save Menu Item in the database
  Menu_Item.create(menu_item, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Menu Item."
      });
    else res.send(data);
  });
};

/**
 * Retrieve all of the menu items from the MySQL database.
 *
 * @param req
 * @param res
 */

exports.findAll = (req, res) => {
  Menu_Item.getAll((err, data) => {

    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving menu items."
      });
    } else {
      res.send(data);
    }

  });
};

/**
 * Find a single menu item with an menu item Id, from the MySQL database.
 *
 * @param req
 * @param res
 */

exports.findOne = (req, res) => {
  Menu_Item.findById(req.params.menuitemId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Menu Item with id ${req.params.menuitemId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Menu Item with id " + req.params.menuitemId
        });
      }
    } else res.send(data);
  });
};

/**
 * Search for a menu item from the MySQL database.
 *
 * @param req
 * @param res
 */

exports.search = (req, res) => {
  Menu_Item.searchItems(req.query.query, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Could not find menu items with name '${req.query.query}'.`
        });
      } else {
        res.status(500).send({
          message: `Error returning menu items with name '${req.query.query}'.`
        });
      }
    } else res.send(data);
  });
};
