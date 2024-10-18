import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";

const Navbar2 = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const getEmail = localStorage.getItem("email");

  return (
    <>
      <div className="md:hidden">
        <div className="flex justify-between items-center p-3 relative">
          <div className="flex items-center">
            {/* Hamburger Menu Icon */}
            <button onClick={handleSidebar}>
              {sidebar ? <FaWindowClose /> : <GiHamburgerMenu />}
            </button>
            
          </div>
            <h1 className="text-center">Ubay Operations</h1>

          {/* Search Icon */}
          <div className="">
            <IoSearch />
          </div>

          {/* Sidebar for Mobile */}
          {sidebar && (
            <div className="absolute top-0 left-0 bg-[#F2EAE1] p-2 h-52 w-[70%] rounded-lg flex flex-col justify-between md:hidden">
              <div className="flex flex-col gap-2">
                <div className="flex justify-end">
                  <button onClick={handleSidebar}>
                    <FaWindowClose />
                  </button>
                </div>
                <div className="text-[#FEAF00] border-b-2 border-gray-300">
                    {getEmail}
                </div>
                <Link to={"/menu"}>
                  <div>
                    <h1>Menu</h1>
                  </div>
                </Link>
                <Link to={"/listuser"}>
                  <div className="cursor-pointer">
                    <a>List User</a>
                  </div>
                </Link>
                <Link to={"/"}>
                  <div className="cursor-pointer">
                    <a>Home</a>
                  </div>
                </Link>
              </div>
              {token && (
                <div>
                  <h1 onClick={handleLogout}>Logout</h1>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="hidden md:flex flex-col bg-[#F2EAE1] p-2 h-auto w-full rounded-lg">
          <div className="flex justify-between">
            <Link to={"/menu"}>
              <div>
                <h1>Menu</h1>
                {getEmail}
              </div>
            </Link>
            <Link to={"/listuser"}>
              <div className="cursor-pointer">
                <a>List User</a>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="cursor-pointer">
                <a>Home</a>
              </div>
            </Link>
          </div>
          {token && (
            <div>
              <h1 onClick={handleLogout}>Logout</h1>
            </div>
          )}
        </div>
      </div>

      {/* WEB */}
      <div className="hidden md:block">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center">
            <img src="./logo.png" alt="" />
            <Link to={"/"}>
            <h1 className="ml-2 font-semibold">Ubay Operations</h1>
            </Link>
          </div>
          <div className="flex gap-5">

          <Link to={"/menu"}>
            <div className="font-semibold">
              <h1>Menu</h1>
            </div>
          </Link>
          <Link to={"/listuser"}>
            <div className="cursor-pointer font-semibold">
              <a>List User</a>
            </div>
          </Link>
          </div>

          <div className="flex justify-center items-center gap-5">

          <div className="text-[#FEAF00] font-semibold">
          {getEmail}
            </div>

          {token && (
            <div className="font-semibold">
              <h1 onClick={handleLogout}>Logout</h1>
            </div>
          )}

          {/* Search Icon */}
          <div className="">
            <IoSearch />
          </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar2;
