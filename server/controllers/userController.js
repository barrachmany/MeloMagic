import userModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users).status(200).send("Users found");
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById(id);
    res.json(user).status(200).send("User found");
    console.log(user);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findByIdAndDelete(id);
    res.json(user).status(200).send("User deleted");
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password, profilePicture } = req.body;
    const newUser = new userModel({
      username,
      email,
      password,
      profilePicture,
      favorites: [],
    });
    const savedUser = await newUser.save();
    res.json(savedUser).status(200).send("User created");
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findByIdAndUpdate();
    res.json(user).status(200).send("User updated");
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      res.status(404).send("User not found");
    }
    if (user.password !== password) {
      res.status(401).send("Wrong password");
    }
    res.json(user).status(200);
  } catch (error) {
    console.log(error);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.status(200).send("Logged out");
  } catch (error) {
    console.log(error);
  }
};
