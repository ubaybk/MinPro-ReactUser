import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar2 = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className=" flex justify-between items-center p-3">
        {sidebar && (
          <div className="absolute top-0 left-0 bg-[#F2EAE1] p-2 w-[70%]">
            <div className="flex justify-end">
              <button onClick={handleSidebar}>
                {sidebar ? <FaWindowClose /> : null}
              </button>
            </div>
            <div>
                <h1>Menu</h1>
            </div>
            <Link to={"/listuser"}>
            <div>
                <h1>List User</h1>
            </div>
            
            </Link>
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
