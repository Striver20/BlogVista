import React from "react";
import "../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  const handleBlog = () => {
    navigate("/addblog");
  };
  return (
    <div className="main-sidebar">
      <button className="sidebar-btn" onClick={handleBlog}>
        Create Blog
      </button>
      <div className="sidebar">
        <ul className="sidebar-ul">
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              All Categories
            </a>
          </li>
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              Music
            </a>
          </li>
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              Movies
            </a>
          </li>
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              Sports
            </a>
          </li>
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              Tech
            </a>
          </li>
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              Fashion
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
