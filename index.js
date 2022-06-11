const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connection = require("./Database/MongoDB");
const todos = require("./routes/todos");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//Database connection
connection();

//application routes
app.use("/api/todos", todos);

// --------------------------deployment------------------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// --------------------------deployment------------------------------

//Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
