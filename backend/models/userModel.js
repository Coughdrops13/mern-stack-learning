const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

//static register method
userSchema.statics.register = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use.");
  }

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  // find existing user
  const existingUser = await this.findOne({ email });

  if (!existingUser) {
    throw Error("Incorrect email or password.");
  }

  const passwordIsCorrect = await bcrypt.compare(password, existingUser.password);

  if (!passwordIsCorrect) {
    throw Error("Incorrect email or password.");
  }

  return existingUser;

  
};

module.exports = mongoose.model("User", userSchema);
