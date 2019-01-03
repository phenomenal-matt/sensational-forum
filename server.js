const express = require("express");
const mongoose = require("mongoose");
const dbConnectionUri = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
const port = process.env.port || 5000;

mongoose
  .connect(
    dbConnectionUri,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDb"))
  .catch(err => console.log(err));

//Use Request body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use passport
app.use(passport.initialize());

// Passport Config
const passportConfig = require("./config/passport");
passportConfig(passport);

// require('./config/passport')(passport);

//API routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));
