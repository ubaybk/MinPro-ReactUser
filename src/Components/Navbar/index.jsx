import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const handleSidemenu = () => {
    setSidemenu(!sidemenu);
  };
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
            <div className="absolute w-32 text-center right-0 bg-green-300">
              <Link to={"/login"}>
                <button>login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
