import { useEffect, useState } from "react";
import Navbar2 from "../../Components/Navbar2";
import { IoPersonAdd } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [dataUser, setDataUser] = useState([]);

  const getDataMenu = () => {
    axios.get("https://reqres.in/api/users").then((res) => {
      console.log(res);
      setDataUser(res.data.data);
    });
  };

  useEffect(() => {
    getDataMenu();
  }, []);

  return (
    <>
      <Navbar2 />
      <div>
        <div className=" bg-gray-300 py-3 flex justify-between items-center px-2">
          <h1 className="font-bold">User List</h1>
          <Link to={'/adduser'}>
          <div className="flex items-center gap-2 p-3 rounded-md text-white bg-[#FEAF00]">
            <IoPersonAdd />
            <button className="text-[12px]">ADD NEW USER</button>
          </div>
          </Link>
        </div>
        <div className="bg-gray-400 h-screen">
          {dataUser.map((item, index) => (
            <div
              key={index}
              className="border grid grid-cols-1 p-2 mb-2 bg-white"
            >
              <div className="flex items-center justify-around  gap-3">
                <img src={item.avatar} className="rounded-3xl w-20" alt="" />
                <div className="text-[13px] flex flex-col gap-2">
                  <h1>
                    Name:{" "}
                    <span className="font-semibold">
                      {item.first_name} {item.last_name}
                    </span>
                  </h1>
                  <h1>
                    Email: <span className="font-semibold">{item.email}</span>
                  </h1>
                </div>
                <div className="flex flex-col gap-2 text-[#FEAF00]">
                  <MdEdit />
                  <MdDeleteForever />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListUser;
