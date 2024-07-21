//WebSocket Implementation
const WebSocket = require("ws");
let wss;

const createWebSocketServer = (httpServer) => {
  wss = new WebSocket.Server({ server: httpServer });

  wss.on("connection", (ws) => {
    console.log("WebSocket connection established");

    ws.on("message", (message) => {
      console.log("Received message:", message);
      ws.send("Server received: " + message);
    });

    ws.on("error", (error) => {
      console.error("WebSocket error:", error);
    });

    ws.on("close", () => {
      console.log("WebSocket connection closed");
    });
  });

  return wss;
};

const sendMessage = (message) => {
  if (wss) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }
};

module.exports = { createWebSocketServer, sendMessage };
