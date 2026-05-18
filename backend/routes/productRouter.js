const ensureAuthenticated = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: 100000,
    },
    {
      name: "laptop",
      price: 20000,
    },
  ]);
});

module.exports = router;
