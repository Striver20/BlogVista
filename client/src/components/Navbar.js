import React, { useContext } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";
function Navbar() {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="main-navbar">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <a href="#" className="navbar-a">
            Welcome {user.name}
          </a>
        </li>
        <li className="navbar-li">
          <a href="#" className="navbar-a">
            Home
          </a>
        </li>
        <li className="navbar-li">
          <a href="#" className="navbar-a">
            About
          </a>
        </li>
        <li className="navbar-li">
          <a href="#" className="navbar-a">
            Contact
          </a>
        </li>
        <li className="navbar-li">
          <a href="#" className="navbar-a" onClick={handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
