const express = require("express");
const router = express.Router();
const home = require("../controllers/auth-controllers")
const authControllers = require("../controllers/auth-controllers");
 

router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;







 