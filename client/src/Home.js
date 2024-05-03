import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/Home.css";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import axios from "axios";
function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/addBlog")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching blogs from server", err);
      });
  }, []);
  return (
    <div className="main-home">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="image">
        <img className="home-image" />
      </div>
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="cards">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              hoverable
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
