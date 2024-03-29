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
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const loginroutes = require("./routes/login_routes");
const helmet = require("helmet");

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

function getLogFileName() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Add leading zero if needed
  const day = now.getDate().toString().padStart(2, "0"); // Add leading zero if needed
  return path.join(__dirname, "logs", `access_${year}-${month}-${day}.log`);
}
app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    methods: ["POST", "GET", "HEAD", "PUT", "DELETE"],
    credentials: true,
  })
);

// Set up the morgan logger middleware to log to the dynamically generated log file
app.use(
  morgan("tiny", {
    stream: fs.createWriteStream(getLogFileName(), { flags: "a" }),
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/articles", articlesRoutes);
app.use("/user", userRoutes);
app.use("/queries", queriesRoutes);
app.use("/utility", utilityRoutes);
app.use("/log", loginroutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.log("error occured")
  // Log the error for debugging purposes
  console.error(err.stack);

  // Set the HTTP status code and send an error response
  res.status(500).send("Internal Server Error");
});
module.exports = app;
