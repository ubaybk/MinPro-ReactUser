import { useState } from "react";
import Navbar2 from "../../Components/Navbar2";
import axios from "axios";
import Footer from "../../Components/Footer";
import { FaUser } from "react-icons/fa";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdMapsHomeWork } from "react-icons/md";

const Menu = () => {
  const [data, setData] = useState([]);

  axios
    .get("https://reqres.in/api/users")
    .then((res) => (console.log(res.data.total), setData(res.data.total)));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <div className="items-center flex-grow bg-gray-300">
        <h1 className=" ml-2 font-bold  px-2 py-3 ">Dashboard</h1>
        <div className="flex justify-center flex-col gap-5 items-center border-2 p-2 mx-2 bg-slate-400 rounded-lg">
          <div className="border-2 w-[300px] md:w-[600px] flex flex-col gap-5 justify-center items-center h-[200px] text-[24px] font-semibold text-center rounded-lg bg-green-400 p-2">
            <FaUser className="size-16" />
            <h1>User's Total : {data}</h1>
          </div>
          <div className="border-2 w-[300px] md:w-[600px] flex flex-col gap-5 justify-center items-center h-[200px] text-[24px] font-semibold text-center rounded-lg bg-yellow-400 p-2">
            <LuBadgeDollarSign className="size-16" />
            <h1>Benefit Total : 300$</h1>
          </div>
          <div className="border-2 w-[300px] md:w-[600px] flex flex-col gap-5 justify-center items-center h-[200px] text-[24px] font-semibold text-center rounded-lg bg-gray-400 p-2">
            <MdMapsHomeWork className="size-16" />
            <h1>Total Branches: {data}</h1>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
