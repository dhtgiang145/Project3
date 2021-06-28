module.exports = function (app) {
  var reviews = require("../controllers/reviews.controller.js");

  app.post("/api/review", reviews.createReview);
  app.get("/api/review/:id", reviews.getReview);
  app.get("/api/reviews", reviews.reviews);
  app.put("/api/review", reviews.updateReview);
  app.delete("/api/review/:id", reviews.deleteReview);
};
