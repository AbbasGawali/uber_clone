import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-center  bg-cover bg-[url(https://images.pexels.com/photos/4543112/pexels-photo-4543112.jpeg?auto=compress&cs=tinysrgb&w=600)] pt-8  w-full flex flex-col justify-between ">
      <img
        className="w-16 ml-8"
        src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png"
        alt="uber logo"
      />
      <div className="bg-white p-4 ">
        <h2 className="text-2xl font-bold">Get Started with Uber</h2>
        <Link
          to={"/login"}
          className="flex justify-center font-bold w-full bg-black text-white py-3  rounded mt-4 "
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
