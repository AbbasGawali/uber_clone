import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
      firstName: "",
      lastName: "",
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
            <h3 className="text-lg font-medium  mb-2">What's your Name</h3>
            <div className="flex gap-4 ">
              <input
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
                required
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-1/2 text-base placeholder:text-base   "
                placeholder="First name"
              />
              <input
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
                required
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-1/2 text-base placeholder:text-base   "
                placeholder="Last name"
              />
            </div>

            <h3 className="text-lg font-medium  mb-2">What's your Email</h3>
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              required
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base   "
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
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base"
            />

            <button className="bg-[#111] cursor-pointer text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>

          <p className="self-end">
            Already have an account?{" "}
            <Link to={"/login"} className=" text-blue-800">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <p className="text-[10px]">
        By proceeding, you consent to get calls, WhatsApp or SMS messages,
        includiung by automated means, from Uber and it's affiliates to the
        details provided.
      </p>
    </div>
  );
};

export default UserSignup;
