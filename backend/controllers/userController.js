// login user
const loginUser = async (req, res) => {
  res.json({ message: "Login user" });
};

// register user

const registerUser = async (req, res) => {
  res.json({ message: "Register user" });
};

module.exports = {
  loginUser,
  registerUser,
};
