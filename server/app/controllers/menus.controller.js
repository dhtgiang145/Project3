const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Menu = mongoose.model("Menu");

exports.createMenu = (req, res) => {
  const menu = new Menu({
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    value: 0,
  });
  menu.save
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

exports.getMenu = (req, res) => {
  Menu.findById(req.params.id)
    .select("-__v")
    .then((menu) => {
      res.status(200).json(menu);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id,
          error: err,
        });
      }
      return res.status(500).send({
        message: "Error retrieving Item with id " + req.params.id,
        error: err,
      });
    });
};

exports.menus = (req, res) => {
  Menu.find()
    .select("-__v")
    .then((menuInfos) => {
      res.status(200).json(menuInfos);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};

exports.deleteMenu = (req, res) => {
  Menu.findByIdAndRemove(req.params.id)
    .select("-__v-_id")
    .then((menu) => {
      if (!menu) {
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

exports.updateMenu = (req, res) => {
  Chef.findByIdAndUpdate(
    req.body.id,
    {
      title: req.body.title,
      desc: req.body.desc,
      price: req.body.price    
    },
    { new: false }
  )
    .select("-__v")
    .then((menu) => {
      if (!menu) {
        return res.status(404).json({
          message: "No item found with id = " + req.params.id,
          error: "404",
        });
      }
      res.status(200).json(menu);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error -> Can't update item with id = " + req.params.id,
        error: err.message,
      });
    });
};
