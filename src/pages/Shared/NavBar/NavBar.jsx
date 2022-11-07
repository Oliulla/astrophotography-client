import React from "react";
import { useState } from "react";
import brandImg from "../../../assets/img/brandImg.jpg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [open, setOpen] = useState(true);

  const user = {};

  return (
    <nav className="bg-[#1c354b] px-4 py-4 md:px-14 w-full flex justify-between items-center z-40 static">
      <div>
        <Link to="/">
          <img className="w-8 h-8 rounded-full" src={brandImg} alt="" />
          <h2 className="text-yellow-700 text-xl md:text-2xl font-semibold pl-2">
            Astrophotography
          </h2>
        </Link>
      </div>
      <div
        className={`flex flex-col items-center md:flex-row gap-6 mt-3 py-4 md:py-0 md:mt-0 md:gap-12 md:top-0 z-50 lg:bg-transparent absolute md:static h-full w-3/4 md:w-auto duration-500 ${
          open ? "left-0 top-20 bg-black" : "left-[-240px] top-20"
        }`}
      >
        <Link className="hover:text-yellow-600" to="/home">
          Home
        </Link>

        <Link className="hover:text-yellow-600" to='/blog'>
          Blog
        </Link>
        {user?.uid ? (
          <button className="hover:text-yellow-600">Log Out</button>
        ) : (
          <>
            <Link className="hover:text-yellow-600" to="/register">
              Register
            </Link>
            <Link className="hover:text-yellow-600" to="/login">
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
