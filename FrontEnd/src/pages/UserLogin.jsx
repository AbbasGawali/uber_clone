import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLOgin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16  mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber logo"
        />
        <div className="flex flex-col ">
          <form action="" onSubmit={handleSubmit}>
            <h3 className="text-lg font-medium  mb-2">What's your email</h3>
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              required
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base   "
              placeholder="email@example.com"
            />
            <h3 className="mb-2 text-lg font-medium ">Enter Password</h3>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              required
              placeholder="password"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            />

            <button className="bg-[#111] cursor-pointer text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>

          <p className="self-end">
            New here?{" "}
            <Link to={"/signup"} className=" text-blue-800">
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <Link to={"/captain-login"} className="flex items-center justify-center  bg-green-400 cursor-pointer text-white font-semibold mt-2 mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
        Sign in as Captain
      </Link>
    </div>
  );
};

export default UserLOgin;
