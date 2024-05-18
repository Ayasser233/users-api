const mongoose = require("mongoose");
const validator = require("validator");
const userRoles = require("../utilis/user-roles");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Field Must Be Valid E-Mail Address"],
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  role: {
    type: String,
    enum: [userRoles.ADMIN, userRoles.USER, userRoles.MANAGER],
    default: userRoles.USER,
  },
  
  phoneNumber: {
    type: String,
    unique: true,
    validate: [validator.isMobilePhone, "Field Must Be Valid Phone Number"],
  },
  }
);

module.exports = mongoose.model("User", userSchema);
