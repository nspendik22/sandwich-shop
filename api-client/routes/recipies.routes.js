module.exports = app => {
    const recipies = require("../controllers/recipies.controller.js");
  
    // Retrieve a single recipe with menuitemId
    app.get("/sandwich-shop/v1/recipies/:sandwichId", recipies.findOne);
  
  };