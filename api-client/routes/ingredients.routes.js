module.exports = app => {
    const ingredients = require("../controllers/ingredients.controller.js");
  
    app.post('/sandwich-shop/v1/ingredients', ingredients.create);

    // Retrieve all Ingredients
    app.get("/sandwich-shop/v1/ingredients", ingredients.findAll);

    app.get("/sandwich-shop/v1/ingredients/search", ingredients.search);
  
    // Retrieve a single Ingredient with ingredientId
    app.get("/sandwich-shop/v1/ingredients/:ingredientId", ingredients.findOne);
  
  };