const Ingredient = require("../models/ingredients.model.js");


// Retrieve all Ingredients from the database.
exports.findAll = (req, res) => {
    Ingredient.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving ingredients."
          });
        else res.send(data);
      });
};

// Find a single ingredient with an ingredientId
exports.findOne = (req, res) => {
    Ingredient.findById(req.params.ingredientId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.ingredientId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.ingredientId
            });
          }
        } else res.send(data);
      });
};
