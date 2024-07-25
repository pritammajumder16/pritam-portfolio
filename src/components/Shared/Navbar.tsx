import { NavLink } from "react-router-dom";
import { navBarItems } from "../../constants";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">PM</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {navBarItems.map((navItem) => (
          <NavLink
            to={navItem.route}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            {navItem.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
