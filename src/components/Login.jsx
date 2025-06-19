import { useState } from "react";

const Login = () => {
  const [email, setUser] = useState("");
  const [pass, setpass] = useState("");
  const [err, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (pass.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("User login successful");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={submit}>
        Email:
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        <a href="">Forget password?</a>
        <h2>{err}</h2>
      </form>
    </div>
  );
};

export default Login;
