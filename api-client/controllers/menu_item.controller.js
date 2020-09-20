const Menu_Item = require("../models/menu_item.model.js");


// Retrieve all Menu Items from the database.
exports.findAll = (req, res) => {
    Menu_Item.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving menu items."
          });
        else res.send(data);
      });
};

// Find a single Menu Item with a menuitemId
exports.findOne = (req, res) => {
    Menu_Item.findById(req.params.menuitemId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.menuitemId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.menuitemId
            });
          }
        } else res.send(data);
      });
};
