import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Navbar from "../../Components/Navbar"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const handleSuccess = () => {
    setSuccess(!success);
  };

  const handleChange = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };


  const handleRegister = () => {
    if(!formRegister.email || !formRegister.password){
      setErrorMessage("Email dan Password wajib diisi")
      return
    }
    axios
      .get("https://reqres.in/api/register", )
      .then((res) => {
        console.log(res);
        handleSuccess();
        toast.success("Register successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setErrorMessage("")
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        toast.error("Failed Register", {
          position: "top-right",
          autoClose: 3000,
        });
        console.log(err);
      });
  };

  return (
    <>
    <Navbar/>
      <div className="h-screen bg-yellow-500 flex justify-center flex-col items-center">
        <div className="border w-full bg-white rounded-xl flex flex-col p-6 mx-5 gap-3 md:w-[700px]">
          <div className="text-center">
            <div className="mb-5">
              <h1 className="font-bold text-[20px]">UBAY OPERATIONS</h1>
            </div>
            <div className="mb-4">
              <h1 className="font-semibold text-[16px]">Register</h1>
              <h1 className="text-[#6C6C6C] text-[11px]">
                Enter your credentials to access your account
              </h1>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px]"
            />
          </div>
          <button onClick={handleRegister} className="bg-yellow-500 text-center py-1 text-[12px] text-white rounded-md">
            REGISTER
          </button>
          {errorMessage && (
            <div className="text-red-500 text-[12px] mt-2 text-center">
              {errorMessage}
            </div>
          )}
          <div className="text-center text-[12px]">
            <p className="text-[#6C6C6C]">
              Forgot your password?{" "}
              <span className="text-[#FEAF00]">Reset Password</span>{" "}
            </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
