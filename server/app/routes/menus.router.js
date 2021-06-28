module.exports = function (app) {
  var menus = require("../controllers/menus.controller.js");

  app.post("/api/menu", menus.createMenu);
  app.get("/api/menu/:id", menus.getMenu);
  app.get("/api/menus", menus.menus);
  app.put("/api/menu", menus.updateMenu);
  app.delete("/api/menu/:id", menus.deleteMenu);
};
