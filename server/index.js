const express = require("express");
const collection = require("./mongo");
const multer = require("multer");
const Blog = require("./mongob");
const cors = require("cors"); // Assuming the path to your cloudinary.js file is correct

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const upload = multer({ storage: multer.diskStorage });

// Your routes and other middleware...

app.post("/", async (req, res) => {
  const { username } = req.body.username;
  try {
    const check = await collection.findOne({ username: username });
    console.log(check);
    if (check) {
      res.send = "exists";
    } else {
      res.send("not found");
    }
  } catch (err) {
    console.log("Error check login details" + err);
  }
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  };
  const { username } = req.body.username;
  try {
    const check = await collection.findOne({ username: username });
    if (check) {
      res.json("Account already exists. Please Login");
    } else {
      await collection.insertMany([data]);
      res.sendStatus(200);
      console.log("User Created");
    }
  } catch (err) {
    console.log("Error signing up " + err);
  }
});

app.post("/addBlog", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file;

  // Cloudinary upload
  try {
    const data = {
      title: title,
      description: description,
      image: result.secure_url,
    };

    const check = await Blog.findOne({ title: title });

    if (check) {
      const newData = {
        title: title,
        description: description,
      };
      await Blog.updateOne({ title: title }, { $set: newData });
      res.json("Blog updated successfully");
    } else {
      await Blog.insertMany([data]);
      res.json("New Blog added successfully");
    }
  } catch (err) {
    console.log("Failed due to error: " + err);
    res.status(500).json({ error: "Error uploading image to Cloudinary" });
  }
});

app.listen(8000, () => {
  console.log("Server connected on port " + 8000);
});
