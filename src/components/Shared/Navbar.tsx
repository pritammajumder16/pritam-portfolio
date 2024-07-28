import { NavLink } from "react-router-dom";
import { NavMenu } from ".";
import { useState } from "react";
import { Hamburger } from "../../assets/svgComponents";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center  py-4 w-full px-5 mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900  items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">PM</p>
      </NavLink>
      <div className=" mt-1 z-20 hamburgerDiv rounded-lg flex items-center justify-center  dark:bg-black-400 bg-gray-100  ">
        <Hamburger
          className={` scale-75 cursor-pointer text-blue-500 ${
            isOpen ? "opened" : "closed transition"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;
