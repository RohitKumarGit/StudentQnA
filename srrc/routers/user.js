const Router = new require("express").Router();
const User = require("../models/user");

Router.get("/topexperts", async (req, res) => {
  const users = await User.find({ role: "expert" }).sort({
    numberOfQuestions: -1
  });
  console.log(users);
  res.send();
});

Router.post("/createuser", async (req, res) => {
  const error = await User.createUser(req.body);
  res.send(error);
});

Router.get("/user/:email", async (req, res) => {
  console.log("user..");
  console.log(req.params);

  const user = await User.getUser(req.params.email);
  res.send(user);
});

Router.post("/deduct", async (req, res) => {
  User.deductPoint(req.body.email, req.body.points);
  res.send();
});
module.exports = Router;
