import { useEffect, useState } from "react";
import Navbar2 from "../../Components/Navbar2";
import { IoPersonAdd } from "react-icons/io5";
import axios from "axios";

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
        <div className=" flex justify-between items-center px-2">
          <h1>User List</h1>
          <div className="flex items-center gap-2">
            <IoPersonAdd />
            <button>ADD NEW USER</button>
          </div>
        </div>
        {dataUser.map((item, index) =>(
        <div key={index}>
          <h1>name: {item.email}</h1>
        </div>

        ))}
      </div>
    </>
  );
};

export default ListUser;
