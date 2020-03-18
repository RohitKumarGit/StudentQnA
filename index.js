
const express = require('express');
const app = express();
app.use(express.json());
const questionRouter = require('./srrc/routers/qna');
const userRouter = require('./srrc/routers/user');
app.use(questionRouter)
app.use(userRouter)
require('./srrc/mongodb/db');

app.listen(5000);