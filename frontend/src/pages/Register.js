import { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    
  };

  return (
    <form className="register" onSubmit={submitHandler}>
      <h3>Register New User</h3>
      <label>Email</label>
      <input
        type="email"
        onChange={emailChangeHandler}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={passwordChangeHandler}
        value={password}
      />
    </form>
  );
};

export default Register;
