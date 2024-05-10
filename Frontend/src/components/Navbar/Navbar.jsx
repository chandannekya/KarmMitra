import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Category" },
    { id: 3, text: "SignIn" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24   px-4 text-white">
      {/* <h1 className="w-full text-3xl font-bold text-[#00df9a]">KarmMitra </h1> */}
      <NavLink className="w-full text-3xl font-bold text-[#00df9a]" to="/">KarmMitra</NavLink>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchChange}
        className="md:flex hidden bg-white text-black p-2 rounded-md"
      />
      <div className=" hidden md:flex">
        <NavLink className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" to="/">
          Home
        </NavLink>
        
        <NavLink className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" to="/category">Category</NavLink>
        <NavLink className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" to="/signin">SignIn</NavLink>
        <NavLink className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" to="/signup">SignUp</NavLink>
        </div>
             {/* <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul> */}

      {/* Mobile Navigation  */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          KarmMitra
        </h1>
        <div className="flex flex-col">
        <NavLink className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600" to="/">
          Home
        </NavLink>
        
        <NavLink className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600" to="/category">Category</NavLink>
        <NavLink className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600" to="/signin">SignIn</NavLink>
        <NavLink className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600" to="/signup">SignUp</NavLink>
        </div>
        {/* {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))} */}
      </ul> 
    </div>
  );
};

export default Navbar;
