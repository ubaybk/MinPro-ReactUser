import { useEffect, useState } from "react";
import Navbar2 from "../../Components/Navbar2";
import { IoPersonAdd } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Footer from "../../Components/Footer";
import { LuBadgeDollarSign } from "react-icons/lu";

const ListUser = () => {
  const [dataUser, setDataUser] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 5,
    total: null,
    total_pages: null,
  });

  const getDataMenu = () => {
    axios
      .get(
        `https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}`
      )
      .then((res) => {
        setPagination({...pagination, total_pages: res.data.total_pages});
        setDataUser(res.data.data);
      });
  };

  const handleNext = () => {
    if (pagination.page < pagination.total_pages) {
      setPagination({
        ...pagination,
        page: pagination.page + 1,
      });
    }
  };

  const handlePrev = () => {
    if (pagination.page > 1) {
      setPagination({
        ...pagination,
        page: pagination.page - 1,
      });
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return; 

    try {
      await axios.delete(`https://reqres.in/api/users/${id}`, config);
      setDataUser(dataUser.filter((user) => user.id !== id));
      window.alert("User has been deleted successfully.");
    } catch (error) {
      window.alert("Failed to delete the user.");
    }
  };

  useEffect(() => {
    getDataMenu();
  }, [pagination.page]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <div className="flex-grow">
        <div className="bg-gray-300 py-3 flex justify-between items-center px-2 md:px-7">
          <h1 className="font-bold">User List</h1>
          <Link to={"/adduser"}>
            <div className="flex items-center gap-2 p-3 rounded-md text-white bg-[#FEAF00]">
              <IoPersonAdd />
              <button className="text-[12px]">ADD NEW USER</button>
            </div>
          </Link>
        </div>
        <div className="bg-gray-400 py-3 pb-5 min-h-screen">
          {dataUser.map((item, index) => (
            <div key={index} className="border p-2 mb-2 md:mx-7 rounded-lg bg-white">
              <div className="flex items-center justify-around gap-3">
                <img src={item.avatar} className="rounded-3xl w-20" alt="" />
                <div className="text-[13px] flex flex-col gap-2">
                  <h1>
                    Name: <span className="font-semibold">{item.first_name} {item.last_name}</span>
                  </h1>
                  <h1>
                    Email: <span className="font-semibold">{item.email}</span>
                  </h1>
                </div>
                <div className="flex flex-col gap-2 text-[#FEAF00]">
                  <Link to={`/detailuser/${item.id}`}>
                    <MdEdit />
                  </Link>
                  <MdDeleteForever onClick={() => handleDelete(item.id)} />
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-5 justify-center">
            <button
              onClick={handlePrev}
              disabled={pagination.page === 1}
              className={`bg-[#FEAF00] text-white w-fit p-1 rounded-lg ${
                pagination.page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <GrPrevious />
            </button>
            <button
              onClick={handleNext}
              disabled={pagination.page === pagination.total_pages}
              className={`bg-[#FEAF00] text-white w-fit p-1 rounded-lg ${
                pagination.page === pagination.total_pages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListUser;
