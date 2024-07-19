const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const connectionDB = require("./database/db");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
dotenv.config();
connectionDB();

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
