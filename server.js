const express = require("express");

const mongoose = require("mongoose");
// const config = require('config')
// const routes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3001;


const passport = require("passport");
const users = require("./routes/api/users");
const plaid = require("./routes/api/plaid");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);



// DB Config
const db = process.env.MONGODB_URI || require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
    useCreateIndex: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/plaid", plaid);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});