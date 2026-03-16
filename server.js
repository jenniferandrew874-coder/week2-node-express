const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// JSON middleware
app.use(express.json());

// Custom middleware (logs requests)
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// GET /
app.get("/", (req, res) => {
  res.send("My Week 2 API!");
});

// POST /user
app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required"
    });
  }

  res.json({
    message: `Hello, ${name}!`
  });
});

// GET /user/:id
app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  res.send(`User ${id} profile`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
