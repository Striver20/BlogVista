import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function Signup() {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    try {
      const response = await axios.post("http://localhost:8000/signup", form);
      response.status === 200
        ? console.log("send perfectly")
        : console.log("unable to send");
      navigate("/home");
    } catch (err) {
      console.log("Error due to :", err);
    }
  };

  const handleAccount = () => {
    navigate("/");
  };

  return (
    <>
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
              placeholder="Enter Name"
              type="text"
              className="text"
              name="name"
              onChange={handleChange}
            />
            <input
              placeholder="Enter UserName"
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
            <button className="loginbtn" onClick={handleSubmit}>
              Signup
            </button>
            <h4 className="or">OR</h4>
            <button className="accountbtn" onClick={handleAccount}>
              Already have an account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
