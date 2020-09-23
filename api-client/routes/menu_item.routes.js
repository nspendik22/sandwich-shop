module.exports = app => {
    const menu_items = require("../controllers/menu_item.controller.js");
  
    app.post('/sandwich-shop/v1/menu_items', menu_items.create);

    // Retrieve all Menu Items
    app.get("/sandwich-shop/v1/menu_items", menu_items.findAll);
  
    app.get("/sandwich-shop/v1/menu_items/search", menu_items.search)

    // Retrieve a single Menu Item with menuitemId
    app.get("/sandwich-shop/v1/menu_items/:menuitemId", menu_items.findOne);

    
  
  };