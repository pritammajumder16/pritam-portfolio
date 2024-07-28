import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7">
      <span className="text-black-400  flex-1 font-extrabold text-3xl  max-md:text-center dark:text-gray-100">
        Have a project in mind? <br className="sm:block hidden" />
      </span>
      <Link
        to="/contact"
        className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Contact
      </Link>
    </section>
  );
};
