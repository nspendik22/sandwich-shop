const Recipe = require("../models/recipies.model.js");

exports.findOne = (req, res) => {
    Recipe.findById(req.params.sandwichId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Menu Item with id ${req.params.sandwichId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Menu Item with id " + req.params.sandwichId
            });
          }
        } else res.send(data);
      });
};
