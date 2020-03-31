const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://root:PpfaEyRSi5xiDaL@cluster0-wkbbu.mongodb.net/test",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
