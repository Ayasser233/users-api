const express = require("express");
const router = express.Router();
const multer = require("multer");
const appError = require("../utilis/apperror");

const userscontroller = require("../controllers/users.controller");
const verifytoken = require("../middlewares/verifytoken");
const apperror = require("../utilis/apperror");

router.route("/").get(verifytoken, userscontroller.getAllUsers);

router
  .route("/register")
  .post( userscontroller.register);

router.route("/login").post(userscontroller.login);

module.exports = router;
