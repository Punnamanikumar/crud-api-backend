const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id Already Present"],
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("Invalid Email");
    },
  },
  tech: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
