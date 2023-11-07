const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  patchUser,
  putUser,
} = require("./controllers/myControllers.js");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes
// GET a single User
app.get("/api/User/:id", getUser);
// DELETE a User
app.delete("/api/User/:id", deleteUser);
// Update User using PATCH
app.patch("/api/User/:id", patchUser);
// Update User using PUT
app.put("/api/User/:id", putUser);
// Add a new User
app.post("/api/Users", createUser);
// GET all Users
app.get("/api/Users", getUsers);



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
