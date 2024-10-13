import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate()
  const [sidemenu, setSidemenu] = useState(false);
  const handleSidemenu = () => {
    setSidemenu(!sidemenu);
  };
  const token = localStorage.getItem("access_token");
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  useEffect(() => {
    token;
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="bg-yellow-400 ">
            <div className="px-3 py-4 flex items-center justify-between">
              <div className="flex justify-center items-center gap-2">
                <img src="/logo.png" alt="test" />
                <h1 className="font-bold">Ubay Operations </h1>
              </div>
              <button onClick={handleSidemenu}>
                {sidemenu ? <FaWindowClose /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>
          {sidemenu && (
            <div className="absolute flex flex-col w-32 text-center right-0 bg-green-300">
              {token ? (
                <div className="flex flex-col">
                  <Link to={"/menu"}>
                    <button>menu</button>
                  </Link>
                  <Link to={"/"}>
                    <button onClick={handleLogout}>logout</button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col">
                  <Link to={"/login"}>
                    <button>login</button>
                  </Link>
                  <Link to={"/register"}>
                    <button>register</button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
