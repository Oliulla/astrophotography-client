import React from "react";
import { useState } from "react";
import brandImg from "../../../assets/img/brandImg.jpg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // sign out user
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.info("Successfully logged Out");
      })
      .catch((err) => {
        toast.warning("logged out failed");
      });
  };

  return (
    <nav className="bg-[#000] px-4 py-3 md:px-14 w-full flex justify-between items-center z-40 static">
      <div>
        <Link to="/">
          <img className="w-10 h-10 rounded-full" src={brandImg} alt="" />
          <h2 className="text-xl md:text-2xl font-extrabold pl-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Astrophotography
          </h2>
        </Link>
      </div>
      <div
        className={`flex flex-col items-center md:flex-row gap-6 mt-3 py-4 md:py-0 md:mt-0 md:gap-12 md:top-0 z-50 lg:bg-transparent absolute md:static h-full w-3/4 md:w-auto duration-500 ${
          open ? "left-0 top-20 bg-black" : "left-[-240px] top-20"
        }`}
      >
        <Link className="text-blue-200 hover:text-blue-400 text-[1.1rem] hover:underline" to="/home">
          Home
        </Link>

        <Link className="text-blue-200 hover:text-blue-400 text-[1.1rem] hover:underline" to="/services">
          Services
        </Link>
        <Link className="text-blue-200 hover:text-blue-400 text-[1.1rem] hover:underline" to="/blog">
          Blog
        </Link>
        {user?.uid ? (
          <>
            <Link className="text-blue-200 hover:text-blue-400 text-[1.1rem] hover:underline" to="/myreviews">
              My Reviews
            </Link>
            <Link className="text-blue-200 hover:text-blue-400 text-[1.1rem] hover:underline" to="/addservice">
            Add service
            </Link>
            <button onClick={handleLogOut} className="rounded bg-gray-900 text-white px-2 py-1">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link className="text-blue-200 hover:text-blue-400 text-[1.1rem] hover:underline" to="/register">
              Register
            </Link>
            <Link className="text-blue-200 hover:text-blue-400 text-[1.1rem] hover:underline" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
      <div
        className="h-8 w-8 block md:hidden text-blue-800"
        onClick={() => setOpen(!open)}
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
    </nav>
  );
};

export default NavBar;
