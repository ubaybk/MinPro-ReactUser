import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col gap-3">
        <div className="bg-[#F5F7FA] flex flex-col justify-center items-center py-7 h-[400px] w-screen">
          <h1 className="font-semibold">Lessons and insights</h1>
          <h1>From 8 years</h1>
          <div className="w-[70%]">
            <img src="./hero.png" alt="" />
          </div>
          <p></p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-center">
            <h1 className="font-semibold">Our Clients</h1>
            <h1 className="text-[10px]">We have been working with some Fortune 500+ clients</h1>
          </div>
          <div className="grid grid-cols-3 justify-items-center">
            <img src="./clients/1.png" alt="" />
            <img src="./clients/2.png" alt="" />
            <img src="./clients/3.png" alt="" />
            <img src="./clients/4.png" alt="" />
            <img src="./clients/5.png" alt="" />
            <img src="./clients/6.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
