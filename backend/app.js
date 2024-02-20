const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const authRoutes = require("./routes/authRoutes");
const articlesRoutes = require("./routes/articlesRoutes");
const userRoutes = require("./routes/userRoutes");
const queriesRoutes = require("./routes/queriesRoutes");
const utilityRoutes = require("./routes/utilityRoutes");

// Function to generate the log file name based on the current date
function getLogFileName() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Add leading zero if needed
  const day = now.getDate().toString().padStart(2, "0"); // Add leading zero if needed
  return path.join(__dirname, "logs", `access_${year}-${month}-${day}.log`);
}

// Set up the morgan logger middleware to log to the dynamically generated log file
app.use(
  morgan("tiny", {
    stream: fs.createWriteStream(getLogFileName(), { flags: "a" }),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRoutes);
app.use("/articles", articlesRoutes);
app.use("/user", userRoutes);
app.use("/queries", queriesRoutes);
app.use("/utility", utilityRoutes);

module.exports = app;
