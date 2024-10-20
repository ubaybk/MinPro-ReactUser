import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Navbar from "../../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

console.log(formLogin.email)


  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(""); // State to manage error message

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    // Validate if email and password are filled in
    if (!formLogin.email || !formLogin.password) {
      setError("Email dan password harus diisi.");
      return;
    }

    axios
      .post("https://reqres.in/api/login", formLogin)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        const email = formLogin.email
        localStorage.setItem("access_token", token);
        localStorage.setItem("email", email)
        setError(""); // Clear any previous error
        setSuccess(true);
        toast.success("Login successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/menu");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed Login", {
          position: "top-right",
          autoClose: 3000,
        });
        setError("Username atau password salah."); // Set error message
      });
  };

  return (
    <>
    <Navbar/>
      <div className="h-screen bg-yellow-500 flex justify-center flex-col items-center">
        <div className="border w-full bg-white rounded-xl flex flex-col p-6 mx-5 gap-3 md:w-[700px] ">
          <div className="text-center">
            <div className="mb-5">
              <h1 className="font-bold text-[20px]">UBAY OPERATIONS</h1>
            </div>
            <div className="mb-4">
              <h1 className="font-semibold text-[16px]">SIGN IN</h1>
              <h1 className="text-[#6C6C6C] text-[11px]">
                Enter your credentials to access your account
              </h1>
            </div>
          </div>
          {error && ( // Display error message if there is an error
            <div className="text-red-500 text-center mb-4 text-[12px]">
              {error}
            </div>
          )}
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
          
            <button onClick={handleLogin} className="bg-yellow-500 text-center py-1 text-[12px] text-white rounded-md">SIGN IN</button>
          
          <div className="text-center text-[12px]">
            <p className="text-[#6C6C6C]">
              Forgot your password?{" "}
              <span className="text-[#FEAF00]">Reset Password</span>{" "}
            </p>
          </div>
          <div></div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
