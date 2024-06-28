import React from "react";
import { Link } from "react-router-dom";
import backgroundvideo from "./../assets/background.mp4";
import profilePhoto from "./../assets/profilePhoto.jpg";
import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    profilePicture: "",
    favorites: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("before register");
      const newFormData = new FormData();
      newFormData.append("username", formData.username);
      newFormData.append("email", formData.email);
      newFormData.append("password", formData.password);
      newFormData.append("profilePicture", formData.profilePicture);

      const response = await axios.post("http://localhost:5000/api/users/register", newFormData);
      //console.log(response);
      console.log("after register");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerH1Container">
        <h1 className="registerH1">Register</h1>
      </div>
      <img src={profilePhoto} className="profilePhoto" />
      <input
        type="text"
        name="username"
        placeholder="username"
        className="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        className="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <video
        autoPlay
        loop
        muted
        playsInline
        src={backgroundvideo}
        className="backgroundvideo"></video>
      <div className="registerEnd">
        <Link to="/choosestory">
          <button onClick={handleRegister}>Register</button>
        </Link>
        <a href="/signin" className="aRegisterSignup">
          Already have an account?
        </a>
      </div>
    </div>
  );
};

export default RegisterPage;
