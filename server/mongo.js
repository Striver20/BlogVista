const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/learn")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("MongoDb connection failed due to : ", err);
  });

const newSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
