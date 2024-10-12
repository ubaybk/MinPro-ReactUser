import Navbar2 from "../../Components/Navbar2";

const AddUser = () => {
  return (
    <>
      <Navbar2 />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="border p-5 flex flex-col gap-3">
          <h1>Add New User</h1>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              
              placeholder="Enter your name"
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
              type="email"
              name="job"
              placeholder="Enter your job"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[10px]"
            />
          </div>
          <div className="bg-yellow-500 text-center py-1 text-[12px] text-white rounded-md">
            <button>SIGN IN</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddUser;
