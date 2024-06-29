import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {
  console.log("registering user");
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  console.log(email, password, username);
  if (!email || !password || !username) {
    console.log("error");
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  try {
    const rs = await userModel.findOne({ email: email });
    if (rs) {
      console.log("email already exists");
      return res.status(406).json({ message: "email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const rs2 = await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const token = generateTokens(rs2);
    res.status(201).send({
      email: rs2.email,
      username: rs2.username,
      password: rs2.password,
      _id: rs2._id,
      ...token,
    });
    console.log("user registered");
  } catch (error) {
    console.log("error 400");
    res.status(400).json({ message: error.message });
  }
};

const generateTokens = async (user) => {
  try {
    const accessToken = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION }
    );
    const refreshToken = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_REFRESH_SECRET
    );
    if (user.refreshTokens == null) {
      user.refreshTokens = [refreshToken];
    } else {
      user.refreshTokens.push(refreshToken);
    }
    await user.save();
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  } catch (err) {
    console.log(err);
  }
};

export default { register };
