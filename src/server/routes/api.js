var express = require('express');
var router = express.Router();
const users_controller = require("../controller/userController");

// authentication routes
router.post("/sign-up", users_controller.sign_up);

router.post("/login", users_controller.login);

router.get("/is_auth", users_controller.is_auth);

router.delete("/logout", users_controller.logout);

module.exports = router;
