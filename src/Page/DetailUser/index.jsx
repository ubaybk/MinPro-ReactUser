import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "../../Components/Navbar2";
import Breadcrumb from "../../Components/Breadcrumb";

const DetailUser = () => {
  const { id } = useParams();
  const [dataDetailUser, setDataDetailUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    job: "staff",
    location: "jakarta",
  });
  const breadcrumbItems = [
    { label: "List User", path: "/listuser" },
    { label: "Detail User", path: `/detailuser/${id}` },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataDetailUser({
      ...dataDetailUser,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const [handleSave, setHandleSave] = useState(false);

  const buttonHandleSave = (e) => {
    e.preventDefault();
    axios
      .put(`https://reqres.in/api/users/${id}`, {
        name: dataDetailUser.first_name,
        job: dataDetailUser.job,
      })
      .then((res) => {
        console.log(res);
        setHandleSave(true);
        setTimeout(() => {
          navigate("/listuser");
        }, 3000);
      });
  };

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
      <div className="h-screen  flex flex-col">
        <Navbar2 />
        

        <div className="p-3 flex flex-col gap-5">
        <div className="flex justify-end">
          <Breadcrumb items={breadcrumbItems} />
        </div>
          <div className="flex items-center md:justify-center gap-4 ">
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
                name="first_name"
                placeholder="name"
                onChange={handleChange}
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
                name="last_name"
                onChange={handleChange}
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
                name="email"
                onChange={handleChange}
                placeholder="name"
                value={dataDetailUser.email}
                className="border-2 rounded-md text-center py-1 bg-slate-100 focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="FullName" className="font-semibold">
                Job
              </label>
              <input
                type="text"
                name="job"
                onChange={handleChange}
                placeholder="job"
                value={dataDetailUser.job}
                className="border-2 rounded-md text-center py-1 bg-slate-100 focus:bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="FullName" className="font-semibold">
                Location
              </label>
              <input
                name="location"
                type="text"
                placeholder="location"
                value={dataDetailUser.location}
                className="border-2 rounded-md text-center py-1 bg-slate-100 focus:bg-white"
              />
            </div>
          </div>
          {handleSave && <h1>berhasil update</h1>}
          <div className="flex justify-center mt-4">
            <button
              onClick={buttonHandleSave}
              className="bg-orange-500 rounded-md w-fit px-3 py-1 text-white text-[14px]"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailUser;
