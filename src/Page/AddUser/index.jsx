import { useState } from "react";
import Navbar2 from "../../Components/Navbar2";
import axios from "axios";
import Breadcrumb from "../../Components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";

const AddUser = () => {
  const navigate = useNavigate();
  const [formAddUser, setFormAddUser] = useState({
    name: "",
    last_name: "",
    email: "",
    job: "",
    location: "",
  });
  const [success, setSuccess] = useState(false);

  const breadcrumbItems = [
    { label: "List User", path: "/listuser" },
    { label: "Add User", path: "/adduser" },
  ];

  const handleChange = (e) => {
    setFormAddUser({
      ...formAddUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { name, job } = formAddUser;
    axios
      .post("https://reqres.in/api/users", { name, job })
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setTimeout(() => {
          navigate("/listuser");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar2 />

      <div className="mx-2 ">
        <div className="flex justify-end">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="border-2 rounded-lg p-5 flex flex-col gap-3">
          <h1>Add New User</h1>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px]"
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              onChange={handleChange}
              placeholder="Enter your last name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px]"
            />
          </div>
          <div>
            <label
              htmlFor="job"
              className="block text-sm font-medium text-gray-700"
            >
              Job
            </label>
            <input
              type="text"
              name="job"
              onChange={handleChange}
              placeholder="Enter your job"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px]"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              placeholder="Enter your location"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px]"
            />
          </div>
          <div className="bg-yellow-500 text-center py-1 text-[12px] text-white rounded-md">
            <button onClick={handleSubmit}>SIGN IN</button>
          </div>
          {success && (
            <div>
              <h1>berhasil tambah</h1>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default AddUser;
