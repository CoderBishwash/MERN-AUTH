const { signup } = require("../controllers/authController");
const { signupValidation } = require("../middlewares/authValidation");

const router = require("express").Router();

router.post("/login", (req, res) => {
  res.send("login success");
});

router.post("/signup", signupValidation, signup);

module.exports = router;
