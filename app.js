const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const file = fs.readFileSync("./text.txt");
  res.setHeader("Content-Type", "text/plain");
  res.end(file);
});

server.listen(4080, "127.0.0.1", () => {
  console.log("Server is running on", server.address());
});
