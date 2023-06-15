import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
const [email,setEmail] = useState('')
const [pass,setPass] = useState('')
const { loginUser } = useContext(AuthContext);
const [wrong, setWrong] = useState(false);
const navigate = useNavigate();
    const handleForm=async(e)=>{
        e.preventDefault()
        const data = { email, pass };
        await axios
          .post(`http://localhost:8080/signup/login`, data)
          .then((res) => {
            if (res.data.token) {
                console.log("tkn?",res.data.token)
              loginUser(res.data.token);
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("name", res.data.users);
              console.log("users" , res.data.token)
              alert("login Successfull");
              navigate("/products");
            } else {
              setWrong(true);
            }
          })
          .catch((err) => {
            console.log(err);
            alert("something went wrong");
          });
        console.log(data);
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter you email"
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
        <button type="submit">Login</button>
      </form>
      <Link to='/'><span>Register here</span></Link>
    </div>
  )
}

export default Login