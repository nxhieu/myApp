const express = require("express");

const connectDB = require("./src/Connection");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
