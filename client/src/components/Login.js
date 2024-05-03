import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";
function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(JSON.stringify(e.target.name), e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", form).then((res) => {
        if (res.data === "exists") {
          navigate("/Home");
        } else {
          console.log(JSON.stringify(res.data));
          alert("Account does not exist");
        }
      });
    } catch (err) {
      console.log("Error due to :", err);
    }
  };
  const handleAccount = () => {
    navigate("/Signup");
  };

  return (
    <MyContext.Provider value={form}>
      <div className="main">
        <div className="container">
          <div className="img">
            <img
              src="https://cdn.pixabay.com/photo/2016/01/10/18/42/content-is-king-1132259_1280.jpg"
              className="img"
              alt="BlogImage"
            />
          </div>

          <div className="textfeild">
            <input
              placeholder="Enter username"
              type="text"
              className="text"
              name="username"
              onChange={handleChange}
            />
            <input
              placeholder="Enter Password"
              type="password"
              className="text"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="btns">
            <button className="loginbtn" onClick={handleLogin}>
              Login
            </button>
            <h4 className="or">OR</h4>
            <button className="accountbtn" onClick={handleAccount}>
              Create an account
            </button>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default Login;
