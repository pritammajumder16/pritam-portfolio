import { NavLink } from "react-router-dom";
import { navBarItems } from "../../constants";
import { Dispatch, SetStateAction } from "react";

export const NavMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-fit max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-fit px-4 py-24 pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <nav className="flex flex-col  text-lg gap-4 font-medium ">
            {navBarItems.map((navItem) => (
              <NavLink
                key={navItem.id}
                to={navItem.route}
                className={`hover:bg-blue-200 text-center transition px-16 py-3 rounded-lg ${({
                  isActive,
                }: {
                  isActive: boolean;
                }) => (isActive ? "text-blue-500" : "text-black")}`}
              >
                {navItem.text}
              </NavLink>
            ))}
          </nav>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};
