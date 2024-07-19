const express = require("express");
const http = require("http");
const cors = require("cors");
const routes = require("./routes/routes");
const connectionDB = require("./database/db");
const dotenv = require("dotenv");
const { createWebSocketServer, sendMessage } = require("./ws/ws");
dotenv.config();
const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = createWebSocketServer(server);

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectionDB();

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
