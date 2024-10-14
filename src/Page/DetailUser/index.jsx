import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar2 from "../../Components/Navbar2";

const DetailUser = () => {
  const { id } = useParams();
  const [dataDetailUser, setDataDetailUser] = useState({});

  const getDetailMenu = () => {
    axios(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res);
        setDataDetailUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailMenu();
  }, []);
  return (
    <>
      <div className="h-screen gap-10 flex flex-col">
        <Navbar2 />

        <div className="p-3 flex flex-col gap-5">
          <div className="flex items-center gap-4 ">
            <img src={dataDetailUser.avatar} className="rounded-full" alt="" />
            <div className="flex flex-col">
              <h1 className="font-semibold">
                {dataDetailUser.first_name}{" "}
                <span>{dataDetailUser.last_name}</span>
              </h1>
              <p className="text-[12px]">Jakarta</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <div className="flex flex-col">
              <label htmlFor="Name" className="font-semibold">
                First Name
              </label>
              <input
                type="text"
                placeholder="name"
                value={dataDetailUser.first_name}
                className="border-2 rounded-md text-center py-1 bg-slate-100 focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="FullName" className="font-semibold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="last name"
                value={dataDetailUser.last_name}
                className="border-2 rounded-md text-center py-1 bg-slate-100 focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="FullName" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="name"
                value={dataDetailUser.email}
                className="border-2 rounded-md text-center py-1 bg-slate-100 focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="FullName" className="font-semibold">
                Location
              </label>
              <input
                type="email"
                placeholder="name"
                value={"Jakarta"}
                className="border-2 rounded-md text-center py-1 bg-slate-100 focus:bg-white"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-orange-500 rounded-md w-fit px-3 py-1 text-white text-[14px]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailUser;
