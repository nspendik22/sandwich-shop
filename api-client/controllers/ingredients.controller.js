const Ingredient = require("../models/ingredients.model.js");

/**
 * Creates an ingredient and stores it in the MySQL database
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

  const ingredient = new Ingredient({
    name: req.body.name,
    unit: req.body.unit
  });

  // Save Menu Item in the database
  Ingredient.create(ingredient, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ingredient."
      });
    else res.send(data);
  });
};

/**
 * Retrieve all of the ingredients from the MySQL database.
 *
 * @param req
 * @param res
 */

exports.findAll = (req, res) => {
    Ingredient.getAll((err, data) => {
        if (err) {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving ingredients."
          });
        } else {
          res.send(data);
        } 
      });
};

/**
 * Find a single ingredient with an ingredientId, from the MySQL database.
 *
 * @param req
 * @param res
 */

exports.findOne = (req, res) => {
    Ingredient.findById(req.params.ingredientId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Ingredient with id ${req.params.ingredientId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Ingredient with id " + req.params.ingredientId
            });
          }
        } else res.send(data);
      });
};

/**
 * Search for an ingredient from the MySQL database.
 *
 * @param req
 * @param res
 */

exports.search = (req, res) => {
  Ingredient.searchItems(req.query.query, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Could not find ingredients with name '${req.query.query}'.`
          });
        } else {
          res.status(500).send({
            message: `Error returning ingredients with name '${req.query.query}'.`
          });
        }
      } else res.send(data);
    });
};
