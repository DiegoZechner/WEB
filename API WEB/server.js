const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;

const data = [
  { name: "John", age: 30 },
  { name: "Alice", age: 35 },
  { name: "Bob", age: 40 },
  { name: "Eve", age: 28 },
  { name: "David", age: 25 },
  { name: "Grace", age: 32 },
  { name: "Charlie", age: 27 },
  { name: "Sophia", age: 29 },
  { name: "James", age: 22 },
  { name: "Lucas", age: 33 },
];

app.get("/people", (req, res) => {
  res.send(data);
});

app.post("/people", (req, res) => {
  data.push(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
