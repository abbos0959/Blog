const express = require("express");
const Isauthentication = require("../middleware/IsAuth");
const userController = require("../controllers/user");
const router = express.Router();
router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/logout").get(userController.logout);
router.route("/me").get(Isauthentication.Isauthentication, userController.getMe);

module.exports = router;
