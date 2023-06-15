import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const userCreds = { name, email, pass };
    await axios
      .post(`http://localhost:8080/signup/register`, userCreds)
      .then((res) => {
        console.log("userData:", res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
    console.log("userData", userCreds);
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter you name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
