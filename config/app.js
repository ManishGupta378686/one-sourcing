const morgan = require("morgan");
const express = require("express");
const env = require("../environment");
const app = express();
// require("../helpers/encryption");
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/media", express.static("./media"));

// Dev logging middleware
if (["development", "staging"].includes(env("environment"))) {
  app.use(morgan("dev"));
}

app.listen(env("app").port, () => {
  console.log(`Server running in on PORT ${env("app").port}`);
});

module.exports = app; 
