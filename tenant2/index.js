const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello there tenant - 2");
});

server.listen(80, () => {
  console.log('listening on *:3001');
});