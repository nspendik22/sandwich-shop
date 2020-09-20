module.exports = app => {
    const recipies = require("../controllers/recipies.controller.js");
  
    // Retrieve a single recipe with menuitemId
    app.get("/recipies/:sandwichId", recipies.findOne);
  
  };