import { useState } from "react";
const Login = () => {
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
    <form className="login" onSubmit={submitHandler}>
      <h3>Login User</h3>
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
      <button>Login</button>
    </form>
  );
};

export default Login;
