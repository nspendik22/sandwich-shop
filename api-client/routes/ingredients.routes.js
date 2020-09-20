module.exports = app => {
    const ingredients = require("../controllers/ingredients.controller.js");
  
    // Retrieve all Menu Items
    app.get("/ingredients", ingredients.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/ingredients/:ingredientId", ingredients.findOne);
  
  };