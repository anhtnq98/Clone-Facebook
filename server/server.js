const express = require("express");
const server = express();
const port = 5000;
const bodyParser = require("body-parser");
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

server.use

server.get(`/`, (req, res) => {
  res.json("Hello");
});

server.listen(`${port}`, () => {
  console.log(`Server is running on http://localhost:${port} port.`);
});
