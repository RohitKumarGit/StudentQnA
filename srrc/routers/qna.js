const Router = new require("express").Router();
const Answers = require("../models/answers");
const fs = require("fs").promises;
const Questions = require("../models/questions");
var admin = require("firebase-admin");

var serviceAccount = require("../../srrc/studentqna-d44ff-firebase-adminsdk-aofw9-edbf07cb95");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://studentqna-d44ff.firebaseio.com"
});
const auth = require("../middlewares/auth");
const User = require("../models/user");
Router.get("/questions/:email", async (req, res) => {
  console.log(req.params.email);

  const questions = await Questions.getQuestions(req.params.email);
  res.send(questions);
});
Router.get("/questionss/:n", auth, async (req, res) => {
  console.log(req.params);
  console.log("geiing question");
  const questions = await Questions.getAllQuestions(req.params.n);
  console.log("ques", questions);
  res.send(questions);
});
Router.post("/question", async (req, res) => {
  console.log("run");
  console.log(req.body);
  const q = req.body.question;
  console.log(q);
  console.log(req.body.email);
  await Questions.postQuestion(
    q,
    req.body.email,
    req.body.points,
    req.body.name
  );

  res.send();
});
Router.post("/urgency", async (req, res) => {
  const id = req.body.id;
  const question = await Questions.findById(id);
  await question.createUrgency();
  res.send();
});
Router.post("/raise", async (req, res) => {
  const id = req.body.id;
  const question = await Questions.findById(id);

  await question.raiseRequest();
  res.send();
});
Router.post("/answer", async (req, res) => {
  const id = req.body.id;
  const c = await Answers.postAnswer(id, req.body.email);
  await Answers.setAnswer(c._id, req.body.answer);
  res.send();
});
Router.get("/answers", async (req, res) => {
  const id = req.body.id;
  const answers = await Answers.getAnswers(id);
  const answerText = [];
  for (let i = 0; i < answers.length; i++) {
    let text = await fs.readFile(
      __dirname + "/../answers" + answers[i].answerUrl,
      "utf-8"
    );
    answerText.push(text);
    console.log(answers[i]);
  }
  res.send({ answers, answerText });
});
Router.post("/finalize", async (req, res) => {
  await Answers.finalize(req.body.id);
  res.send();
});
module.exports = Router;
