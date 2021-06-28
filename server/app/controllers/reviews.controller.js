const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Review = mongoose.model("Review");

exports.createReview = (req, res) => {
  const review = new Review({
    name: req.body.name,
    item: req.body.item,
    content: req.body.content,
  });
  review.save
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fail!",
        error: err.message,
      });
    });
};

exports.getReview = (req, res) => {
  Review.findById(req.params.id)
    .select("-__v")
    .then((review) => {
      res.status(200).json(review);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id,
          error: err,
        });
      }
      return res.status(500).send({
        message: "Error retrieving item with id " + req.params.id,
        error: err,
      });
    });
};

exports.reviews = (req, res) => {
  Review.find()
    .select("-__v")
    .then((reviewInfos) => {
      res.status(200).json(reviewInfos);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};

exports.deleteReview = (req, res) => {
  Review.findByIdAndRemove(req.params.id)
    .select("-__v-_id")
    .then((review) => {
      if (!review) {
        res.status(404).json({
          message: "No item found with id = " + req.params.id,
          error: "404",
        });
      }
      res.status(200).json({});
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error -> Can't delete item with id = " + req.params.id,
        error: err.message,
      });
    });
};

exports.updateReview = (req, res) => {
  Review.findByIdAndUpdate(
    req.body.id,
    {
      name: req.body.name,
      item: req.body.item,
      content: req.body.content,
    },
    { new: false }
  )
    .select("-__v")
    .then((review) => {
      if (!review) {
        return res.status(404).json({
          message: "No item found with id = " + req.params.id,
          error: "404",
        });
      }
      res.status(200).json(review);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error -> Can't update item with id = " + req.params.id,
        error: err.message,
      });
    });
};
