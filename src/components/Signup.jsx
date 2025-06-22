import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z]{2,30}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!nameRegex.test(firstName)) {
      setError("Invalid First Name");
      return;
    }

    if (!nameRegex.test(lastName)) {
      setError("Invalid Last Name");
      return;
    }

    if (!emailRegex.test(email) || email !== confirmEmail) {
      setError("Invalid or mismatched Email");
      return;
    }

    if (!passRegex.test(password) || password !== confirmPassword) {
      setError("Invalid or mismatched Password");
      return;
    }

    setError("");
    alert("Signup Successful!");
  };

  return (
    <>
      <div className="signup">
        <form onSubmit={submit}>
          <h1>Signup Page</h1><br />
          <label >First Name:</label> <input type="text" placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)} /><br /><br />
            <label >Last Name:</label> <input type="text" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)} /><br /><br />
         <label>Email:</label>  <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <label >Confirm Email:</label> <input type="email" placeholder="Confirm Email" onChange={(e) => setConfirmEmail(e.target.value)} /><br /><br />
            <label >Password:</label><input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <label >Confirm Password:</label><input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />
          <h2>{err}</h2>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
