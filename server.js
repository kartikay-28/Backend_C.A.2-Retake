const express = require('express');
const app = express();
const PORT = 3000;

// In-memory array to store users
const users = [];

app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send("This is Home Route and this is my backend ca - 2");
});

// Signup Route
app.post('/signup', (req, res) => {
  try {
    const { username, email, password, DateofBirth } = req.body;

    // Validations
    if (!username) {
      return res.status(400).json({ message: "Username cannot be empty" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email cannot be empty" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password cannot be empty" });
    }
    if (password.length < 8 || password.length > 16) {
      return res.status(400).json({ message: "Password length should be between 8 and 16 characters" });
    }
    if (!DateofBirth) {
      return res.status(400).json({ message: "Date of Birth cannot be empty" });
    }

    // Create a new user object
    const newUser = { username, email, password, DateofBirth };

    // Save user to the array
    users.push(newUser);

    res.status(201).json({ message: "User created successfully", user: newUser });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
