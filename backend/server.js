const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const Response = require("./responseObj");
const authRouter = require("./authRouter");
const userRouter = require("./user/userRouter");
const postRouter = require("./post/postRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/login", authRouter);
app.use("/posts", postRouter);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.use((err, req, res, next) => {
  res.status(500).json(new Response(true, err.message, null));
});

mongoose
  .connect("mongodb+srv://wmc:wmc20@wmccluster1.5v650it.mongodb.net/test")
  .then(() => {
    app.listen(4000, () => console.log("listening ... 4000"));
  });

