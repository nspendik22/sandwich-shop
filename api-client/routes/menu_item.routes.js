module.exports = app => {
    const menu_items = require("../controllers/menu_item.controller.js");
  
    // Retrieve all Menu Items
    app.get("/menu_items", menu_items.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/menu_items/:menuitemId", menu_items.findOne);
  
  };