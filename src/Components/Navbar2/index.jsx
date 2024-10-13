import { useState, useEffect  } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
const Navbar2 = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token")
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  

  return (
    <>
      <div className=" flex justify-between items-center p-3">
        {sidebar && (
          <div className="absolute top-0 left-0 bg-[#F2EAE1] p-2 h-52 w-[70%] flex flex-col justify-between">
            <div>
              <div className="flex justify-end">
                <button onClick={handleSidebar}>
                  {sidebar ? <FaWindowClose /> : null}
                </button>
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
            {token ? (
            <div>
              <h1 onClick={handleLogout}>Logout</h1>
            </div>

            ) : null}
          </div>
        )}
        <div>
          <button onClick={handleSidebar}>
            {sidebar ? <FaWindowClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        <div>
          
          <h1>Ubay Operations</h1>
        </div>

        <div>
          <IoSearch />
        </div>
      </div>
    </>
  );
};

export default Navbar2;
