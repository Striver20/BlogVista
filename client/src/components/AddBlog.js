import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AddBlog.css";

const AddBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title: initialTitle = "", description: initialDescription = "" } =
    location.state || {};
  const [blog, setBlog] = useState({
    title: initialTitle,
    description: initialDescription,
    image: null, // New state for the image file
    id: Date.now(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setBlog({
        ...blog,
        [name]: e.target.files[0], // Update with the selected image file
      });
    } else {
      setBlog({
        ...blog,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    console.log(blog);
  }, [blog]);

  const handlePublish = async () => {
    try {
      console.log("Data entered");
      const formData = new FormData();
      formData.append("title", blog.title);
      formData.append("description", blog.description);
      formData.append("image", blog.image); // Append the image file to the form data

      const response = await axios.post(
        "http://localhost:8000/addBlog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("send perfectly");
        const createdBlog = response.data;
        console.log("Blog published:", createdBlog);
        navigate("/home");
      } else {
        console.log("Unable to send");
      }
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  return (
    <div>
      <div className="image">
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange}
          className="input"
        />
        <button className="publish" onClick={handlePublish}>
          Publish
        </button>
      </div>
      <div className="blog">
        <input
          type="text"
          placeholder="Title..."
          className="title"
          name="title"
          value={blog.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Description..."
          className="desc"
          name="description"
          value={blog.description}
          onChange={handleChange}
        >
          Write Description here
        </textarea>
      </div>
    </div>
  );
};

export default AddBlog;
