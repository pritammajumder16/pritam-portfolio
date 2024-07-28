import { useLocation, useNavigate } from "react-router-dom";
import { navBarItems } from "../../constants";
import { Dispatch, SetStateAction } from "react";

export const NavMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <main
      className={
        " fixed overflow-hidden z-30 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-fit max-w-lg right-0 z-40 absolute dark:bg-black-400 bg-gray-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-2 " : " translate-x-full ")
        }
      >
        <article className="relative  w-fit px-4 py-24 pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <nav className="flex flex-col  text-lg gap-4 font-medium ">
            {navBarItems.map((navItem) => (
              <span
                key={navItem.id}
                onClick={() => {
                  setIsOpen(!isOpen);
                  navigate(navItem.route);
                }}
                className={`hover:bg-blue-200 text-black-400  dark:hover:!text-black-200 font-bold dark:text-gray-100 text-center transition px-16 py-3 rounded-lg cursor-pointer ${
                  location.pathname == navItem.route
                    ? "!text-blue-500 !bg-blue-200 dark:!text-black-200"
                    : "dark:!text-gray-100"
                }`}
              >
                {navItem.text}
              </span>
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
