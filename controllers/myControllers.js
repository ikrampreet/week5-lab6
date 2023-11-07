const User = require("../models/myModel.js");

// Create a new User
const createUser = async (req, res) => {
  try {
    const { name, email,password, address } = req.body;
    if (!name || !email || !password || !address) {
      return res
        .status(400)
        .json({ error: "All fields (name, email, password,address) are required" });
    }

    const newUser = new User({ name, email, password,address });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all Users
const getUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single User by ID
const getUser = async (req, res) => {
  try {
    const User = await User.findById(req.params.id);
    if (!User) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(User);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a User by ID
const deleteUser = async (req, res) => {
  try {
    const User = await User.findByIdAndDelete(req.params.id);
    if (!User) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single User by ID
const patchUser = async (req, res) => {
  try {
    const User = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!User) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(User);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single User by ID
const putUser = async (req, res) => {
  try {
    const User = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!User) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(User);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  patchUser,
  putUser,
};

